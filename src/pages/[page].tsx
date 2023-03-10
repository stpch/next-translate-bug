import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import { FC } from 'react'

interface Props {
    page?: string
}

const Page: FC<Props> = props => {
    const { isFallback } = useRouter()

    return (
        <>
            <Head>
                <title>next-translate bug example</title>
            </Head>
            <main>
                <div>Fallback rendering: {String(isFallback)}</div>
                <div>Page URL param: {props.page}</div>
            </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [],
    fallback: true,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const page = typeof params?.page === 'string' ? params.page : undefined

    return {
        props: { page },
        revalidate: 1,
    }
}

export default Page
