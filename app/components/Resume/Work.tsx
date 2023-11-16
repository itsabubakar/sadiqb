type Props = {
    location: string
    title: string
    time: string

}
const Work = ({ location, title, time }: Props) => {
    return (
        <div className="border-l-2 border-orange-500 mx-2 my-5 pl-4">
            <h3 className="text-lg font-headers">{location}</h3>
            <p className="font-body text-gray-400 pb-2">{title}</p>
            <p className="font-body text-gray-400 border rounded-lg w-fit  px-2 py-1 border-gray-500">{time}</p>
        </div>
    )
}
export default Work