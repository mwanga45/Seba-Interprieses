export const  POST_QUERY = `*[_type ==="post"]order(publishedAt desc){
_id, produuctName , slug, "imageUrl":image.asset->  url , price , "category":categry->title}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  ..., "imageUrl": image.asset->url, "gallery": gallery[].asset->url, "category": category->title
}`

export const CATEGORY_QUERY = `*[_type == "category"]{_id, title, "imageUrl": image.asset->url}`

export const COMPANY_INFO_QUERY = `*[_type == "companyInfo"][0]`