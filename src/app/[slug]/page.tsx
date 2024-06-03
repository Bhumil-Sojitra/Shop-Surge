import Add from "@/components/add";
import CustomizeProduct from "@/components/customize-product";
import ProductImages from "@/components/product-images";

export default function SinglePage() {
  return (
    <div className="relative flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages />
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          atque tempora aspernatur, numquam aut tempore?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$60</h3>
          <h2 className="font-medium text-2xl">$50</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm ">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            pariatur neque voluptatem molestias, eum aperiam amet veritatis sint
            odit, facere obcaecati debitis culpa distinctio expedita magni totam
            aut repudiandae. Tempora.
          </p>
        </div>
        <div className="text-sm ">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            pariatur neque voluptatem molestias, eum aperiam amet veritatis sint
            odit, facere obcaecati debitis culpa distinctio expedita magni totam
            aut repudiandae. Tempora.
          </p>
        </div>
        <div className="text-sm ">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            pariatur neque voluptatem molestias, eum aperiam amet veritatis sint
            odit, facere obcaecati debitis culpa distinctio expedita magni totam
            aut repudiandae. Tempora.
          </p>
        </div>
      </div>
    </div>
  );
}
