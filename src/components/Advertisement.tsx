import Image from "next/image";
import ad from "@/../public/Ad.png"

function Advertisement(){
    return(
        <div className="py-5 md:p-8">
            <Image src={ad} alt="Ad" placeholder="blur" />
        </div>
    )
}

export default Advertisement;