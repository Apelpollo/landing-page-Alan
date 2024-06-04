import Image from "next/image";
import Link from "next/link";

interface ContacProps {
    data: {
        id: number,
        image: string,
        urlsite: string,
      
    }
}

const Contacts= (props: ContacProps) => {
    const { data } = props
    const { id,  image, urlsite } = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
             <Link href={urlsite} target="_blank">
      <Image
        src={image}
        alt="Image"
        width={100}
        height={100}
        className="w-full md:w-[100px] rounded-2xl h-auto"
      />
    </Link>
        </div>
    );
}

export default Contacts