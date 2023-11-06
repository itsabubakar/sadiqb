import Work from "./Work"

type Props = {}
const Experience = (props: Props) => {
    return (
        <section className="pt-6">
            <h2 className="text-xl font-headers underline decoration-orange-500  decoration-wavy  font-bold pb-4 underline-offset-4">Experiences</h2>
            <div className="flex justify-between flex-wrap py-5">
                <Work />
                <Work />
                <Work />
            </div>

        </section>
    )
}
export default Experience