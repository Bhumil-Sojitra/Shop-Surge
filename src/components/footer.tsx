import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24 py-24">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8  ">
          <Link href={"/"} className="flex gap-2">
            <Image src={"/logo.png"} alt="Logo" width={24} height={24} />
            <div className="text-2xl font-bold ">Shop Surge</div>
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <span className="font-semibold">email@gmail.com</span>
          <span className="font-semibold">+12345 67890</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>About Us</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>New Arrivals</Link>
              <Link href={""}>Accessories</Link>
              <Link href={""}>Men</Link>
              <Link href={""}>Women</Link>
              <Link href={""}>All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>Customer Service</Link>
              <Link href={""}>My Account</Link>
              <Link href={""}>Find a Store</Link>
              <Link href={""}>Legal & Privacy</Link>
              <Link href={""}>Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Subscribe</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Here!"
              className="p-4  w-3/4"
            />
            <button className="w-1/4 bg-fixedColor text-white">Join</button>
          </div>
          <span className="font-semibold">Secure Payment</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* Bottom   */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>&copy; Shop Surge</div>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
