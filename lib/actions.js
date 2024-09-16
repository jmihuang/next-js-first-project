//form submit

export async function uploadProduct(formData) {
  const productItem = {
    alt: formData.alt,
    name: formData.name,
    engName: formData.engName,
    capacity: formData.capacity,
    image: formData.image,
    slug: formData.slug,
    price: formData.price,
    desc: formData.desc,
  };

  console.log(productItem);
}
