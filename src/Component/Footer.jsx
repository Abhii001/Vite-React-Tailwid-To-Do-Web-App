function Footer() {
    return (
        <>
            <div className="h-96 bg-black text-white flex flex-wrap justify-around items-center">
                <div>
                    <div className="text-xl font-medium py-4">Quick Link</div>
                    <div className="flex flex-col text-gray-400">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div>
                    <div className="font-bold text-2xl py-4">Tasks</div>
                    <div>Eat - </div>
                    <div>Sleep - </div>
                    <div>Code - </div>
                </div>
                <div>
                    <div className="font-bold text-2xl py-4">Contact</div>
                    <div className="py-2">+91-9319987171</div>
                    <div>avee.abhishek220@gmail.com</div>
                </div>
            </div>
        </>
    )
}

export default Footer;