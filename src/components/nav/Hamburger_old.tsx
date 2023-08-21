import Image from "next/image";

const Hamburger = () => {
    return (
        <details className="text-white absolute top-2 left-6">
            <summary>
                <Image src="/images/hamburger-stylized.png"
                    alt="hamburger"
                    width={32}
                    height={32}
                />
            </summary>
            <div className="bg-lime-400 flex flex-col w-32 h-96">
                <p>blah 1</p>
                
                <p>blah 2</p>

                <p>blah 3</p>                
            </div>

        </details>
    )
}

export default Hamburger;