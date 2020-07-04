import Main from 'components/main'

function Home({ posts }) {
    return (
        <Main
            title={posts.name}
            description="with ReactJS, NextJS and Styled Components"
        />
    )
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = [{ name: 'marcelo' }]
    const posts = res

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => `/posts/${post.name}`)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This function gets called at build time
export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts

    console.log('getStaticProps -> posts', params)

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            params
        }
    }
}

export default Home
