import Layout from "nextra-theme-docs"
import Footer from "nextra-theme-docs"

export default function MyLayout({ children, pageOpts, pageProps, themeConfig, ...props } : any) {
    return (
        <Layout pageOpts={pageOpts} pageProps={pageProps} themeConfig={themeConfig} {...props} >
            {children}
            <Footer pageOpts={pageOpts} pageProps={pageProps} themeConfig={themeConfig}>
                WHATT {new Date().getFullYear()} ©{' '}
                <a href="https://nextra.site" target="_blank">
                gamebeast
                </a>
                .
            </Footer>
            {children}
        </Layout>
    )
}