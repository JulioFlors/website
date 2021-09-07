import MDXComponents from 'components/MDXComponents'
import { getFileBySlug, getFiles } from 'lib/mdx'
import { MDXRemote } from 'next-mdx-remote'

export default function Post({ source, frontmatter }) {
  return (
    <>
      <MDXRemote {...source} components={MDXComponents} />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.replaceAll('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug)

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  }
}
