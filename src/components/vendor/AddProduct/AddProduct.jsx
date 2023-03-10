import React, {useState} from 'react'
import ProductLayout from '../../GettingStarted/Layout/ProductLayout'
import Create from './Create'
import NewProduct from './NewProduct'
import ProductRequirement from './ProductRequirement'
import ProductPricing from './ProductPricing'
import AddImages from './AddImages'
import useForm from "../../../hooks/useForm";
import useFilesForm from "../../../hooks/useFilesForm";

const AddProduct =()=>{
   const [value, setValue] = useState(1)
   const {fileData, handleFileUpload} = useFilesForm({
    product_image:"",
   
  })
   const { formData, handleInputChange } = useForm({
    // <create/>
    product_category: "",
    product_name:"",
    product_brand:"",
    product_model:"",
    product_color:"",
    // New product
    product_line:"",
    product_vendor_type:"",
    product_type:"",
    product_material_type:"",
    product_description:"",
    product_youtube_id:"",
    product_keys_features:"",
    // Product Requirement
    product_box_inside:"",
    product_note:"",
    product_dimension:"",
    product_weight:"",
    product_warrant:"",
    product_warrant_type:"",
    product_warrant_address:"",
    product_certification:"",
    product_text_manufacturer:"",
    product_care_label:"",
    //products req features
    gender_type:"",
    heel_type:"",
    seasons:"",
    size_type:"",
    sole_tpye:"",
    color_type:"",
    //PRODUCT PRICING
    product_size_price:"",
    product_seller_sku:"",
    product_ean_upc_isbn:"",
    product_quantity:"",
    product_price:"",
    product_sale_price:"",
    startdate:"",
    end_date:"",
    // PRODUCT IMAGES




})
    return(
        <ProductLayout valued={value}>
            {value === 1 && <Create InputData={formData} onchange={handleInputChange} setValue={setValue}/>}
            {value === 2 && <NewProduct InputData={formData} onchange={handleInputChange}  setValue={setValue}/>}
            {value === 3 && <ProductRequirement InputData={formData} onchange={handleInputChange} setValue={setValue}/>}
            {value === 4 && <ProductPricing InputData={formData} onchange={handleInputChange}setValue={setValue}/>}
            {value === 5 && <AddImages fileData={fileData} InputData={formData} onchange={handleFileUpload} setValue={setValue}/>}
        </ProductLayout>
    )
}

export default AddProduct