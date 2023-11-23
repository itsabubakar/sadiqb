import Link from "next/link"
import ArticleItem from "./ArticleItem"

import Codeium from "../../../public/img/devtools/codeium.png"
import VsCode from "../../../public/img/devtools/vscode.png"
import FocusTodo from "../../../public/img/devtools/focus-todo.jpg"
import Render from "../../../public/img/devtools/render.png"

type Props = {}
const page = (props: Props) => {
    return (
        <div className="py-12 font-body px-5 md:px-0">
            <section>
                {/* bread crumbs */}
                <div>

                    <Link className="font-headers text-gray-500 hover:text-gray-300 transition duration-200" href={'/'}>Home</Link> <span>/</span> <Link className="font-headers text-gray-300" href={'/'}>My developer toolbox 2023</Link>
                </div>

                {/* Title */}
                <h1 className="font-headers text-4xl py-2">My developer toolbox 2023</h1>

                {/* date and read time */}
                <div className="flex font-headers gap-2 text-gray-400 items-center">
                    <p>November 23, 2023</p>
                    <p>|</p>
                    <p>4 min read</p>
                </div>
            </section>


            {/* Content */}
            <section className="pt-10 font-body text-gray-300 text-lg">
                <p className="pb-6 text-lg">The apps, extensions and plugins I use to be a better developer.</p>
                <p className="pb-6 text-lg">Digital tools help us finish tasks quicker, which is really helpful. In this article, I'm going to share the tools I use for my work. I'll explain why I use them..</p>

            </section>

            {/* Article */}

            <ArticleItem
                title="Codeium"
                imgSrc={Codeium}
                description="Codeium is a free AI-powered toolkit for developers. It is a tool with in-house models and infrastructure. It offers autocomplete and search features. Codeium's generative code is amazing and is becoming an indispensable  part of my workspace saving me time and helping me ship products faster."
            />

            <ArticleItem
                title="VS Code"
                imgSrc={VsCode}
                description="Visual Studio Code combines the simplicity of a source code editor with powerful developer tooling, like IntelliSense code completion and debugging. The simplicity and the frinctionless approach makes it my favorite editor and its rich growing community."
            />

            <ArticleItem
                title="Focus to-do"
                imgSrc={FocusTodo}
                description="Focus todo is a powerful and simple time tracking app that works with any device helping me keep track of my time and projects."
            />

            <ArticleItem
                title="Render"
                imgSrc={Render}
                description="Render is where my full stack project live. It is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git."
            />

            <div className="py-8 font-body">
                <h2 className="text-3xl font-semibold font-headers">Conclusion</h2>

                <p className='pt-2 text-lg text-gray-300'>I hope you’ve found a new tool that can help you among these!</p>
            </div>



        </div>


    )
}
export default page