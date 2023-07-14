import React, { useRef, useState } from "react";

function AddProduct() {
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const onFileSelect = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((imge) => imge.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;

    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((imag) => imag.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  return (
    <div className=" mx-10/12 w-full h-screen  overflow-hidden ">
      <h1 className="text-2xl fixed z-10 ml-12 font-semibold ">
        Add New Product
      </h1>
      <div className="h-[84vh] flex flex-col gap-2  overflow-y-scroll mb-5 m-2 mt-12 md:mt-14 md:m-8 scroll-hidden no-scrollbar ">
        <div className="border border-slate-400 rounded-lg  p-5">
          <h2 className="text-xl font-medium">Product Images</h2>
          {/* drag and drop images container */}
          <div
            className=" border-2 border-dashed border-slate-500 h-40 rounded-lg flex flex-wrap justify-center py-14 my-5 bg-gray-200 text-slate-500 font-md font-medium"
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            {isDragging ? (
              <span>Drop images here</span>
            ) : (
              <>
                Drag & Drop image here or
                <span
                  className="ml-1 text-blue-800 underline"
                  role="button"
                  onClick={selectFiles}
                >
                  Browse
                </span>
              </>
            )}
            <input
              name="file"
              type="file"
              multiple
              onChange={onFileSelect}
              ref={fileInputRef}
              className="hidden"
            />
          </div>

          {/* display images container */}
          <div className="flex flex-wrap gap-2">
            {/* display images */}
            {images.map((image, index) => (
              <div
                key={index}
                className="w-28 h-28 bg-slate-400 relative rounded "
              >
                <span
                  onClick={(e) => deleteImage(index)}
                  className="absolute -top-2 right-1 text-2xl font-bold "
                >
                  &times;
                </span>
                <img
                  src={image.url}
                  alt={image.name}
                  className="object-cover w-full h-full rounded"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col border border-slate-400 rounded-lg  p-5">
          <h2 className="text-xl font-medium">Product Information</h2>
          <div className="flex mt-5 flex-col gap-2">
            <h2 className="font-sm font-normal">Product Name</h2>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="border-2 rounded p-2 pl-3"
            />
          </div>
          <div className="flex mt-5 flex-col gap-2">
            <h2 className="font-sm font-normal">Product Type</h2>
            <input
              type="text"
              placeholder="Enter Product Type"
              className="border-2 rounded p-2 pl-3"
            />
          </div>

          <div className="flex mt-5 flex-col gap-2">
            <h2 className="font-sm font-normal">Product Description</h2>
            <input
              type="text"
              placeholder="Enter Product Description"
              className="border-2 rounded p-2 pl-3"
            />
          </div>
        </div>

        <button className="border-2 bg-blue-200 rounded p-2 mt-2 text-blue-800 font-bold hover:text-cyan-600  hover:bg-slate-200">
          Add Product +
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
