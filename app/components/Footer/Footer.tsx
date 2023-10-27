type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="pb-10 px-5 md:px-0 ">
            <hr className="h-0 horder-t-2 border-orange-500 border-dashed" />
            <p className="font-headers font-semibold pt-4">You can reach out to me on email <a className="underline decoration-orange-500 hover:decoration-wavy" href="sadiqbilyamin@gmail.com">Sadiqbilyamin@gmail.com</a> or twitter <a className="underline decoration-orange-500 hover:decoration-wavy" href="https://twitter.com/itsabubakar">@itsabubakar</a>. You can also view my code <a className="underline decoration-orange-500 hover:decoration-wavy" href="https://github.com/itsabubakar">@itsabubakar</a> on GitHub.</p>
        </div>
    )
}
export default Footer