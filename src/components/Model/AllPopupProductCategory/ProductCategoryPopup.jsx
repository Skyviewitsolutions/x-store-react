// import React from "react";
// import { Modal } from "react-bootstrap";
// import "./ProductCategoryPopup.css";
// import { MdOutlineCancel } from "react-icons/md";
// import Multiselect from "multiselect-react-dropdown";
// import { FaBars, FaRandom ,FaExternalLinkAlt} from "react-icons/fa";
// const ProductCategoryPopup = () => {

//   const options = [
//     { name: "Vendor Location", id: 1 },
//     { name: "View", id: 2 },
//     { name: "Internal Location", id: 2 },
//     { name: "Customer Location", id: 3 },
//     { name: "Inventory Loss", id: 4 },
//     { name: "Production", id: 5 },
//     { name: "Transit Location", id: 6 },
//   ];
//   const onSelect = (selectedList, selectedItem) => {};

//   const onRemove = (selectedList, removedItem) => {};
//   return (
//     <div>
//       <Modal show={false} size="lg">
//         <div className="procCon">
//           <div className="proChead">
//             <p>Create: Product Category</p>
//           </div>
//           <div className="proiconsdiv">
//             <div className="proCbicon">
//               <FaBars size="25px" className="procbarsicon" />
//               <div className="procont">
//                 <p>0</p>
//                 <span>Products</span>
//               </div>
//             </div>
//             <div className="proCbicon">
//               <FaRandom size="25px" className="procbarsicon" />
//               <div className="procont">
//                 <p>Putway</p>
//                 <span>Rules</span>
//               </div>
//             </div>
//           </div>
//            <div className="pronapa">
//             <div className="prode">
//                 <div className="detinp">
//                     <p>Name</p>
//                     <input type="text" />
//                 </div>
//                 <div className="detsele">
//                     <p>Parent Category</p>
//                     <select>
//                     <option>Assets</option>
//               <option>Assets / Computers and printers</option>
//               <option>
//                 Assets / Extinguishing programs, permits and licenses
//               </option>
//               <option>Assets / Furniture </option>
//               <option>Assets / Houses</option>
//               <option>Assets / lab equipment</option>
//               <option>
//                 Assets / Prefabricated plastic and concrete barriers
//               </option>
//               <option style={{color:'#013b3a'}}>Create and Edit..</option>
//                     </select>
//                     <FaExternalLinkAlt
//               size="14px"
//               style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
//             />
//             </div>
//             </div>
//             <div className="procatalert">
//               <p>Hierarchy</p>
//               <div className="proalbox">
//               <b>No hierarchy position.</b>
//               </div>
//             </div>
//            </div>
//           <div>
//           <div className="AddProductCateContent">
//         <h5>Logistics</h5>

//         <div className="AddProductCateMultiselect">
//           <p>Routes</p>
//           <Multiselect
//             className="Addmultiselect"
//             options={options} // Options to display in the dropdown
//             selectedValues={selectedValue} // Preselected value to persist in dropdown
//             onSelect={onSelect} // Function will trigger on select event
//             onRemove={onRemove} // Function will trigger on remove event
//             displayValue="name" // Property name to display in the dropdown options
//           />
//         </div>
//         <div className="AddProductCatetotal">
//           <p>Total routes</p>
//         </div>
//           <div className="AddProductCatedropdown">
//             <p>Force Removal Strategy</p>
            <select>
//               <option>First in first out (FIFO)</option>
//               <option>Last in First Out (LIFO)</option>
//             </select>
//             <FaExternalLinkAlt
//               size="14px"
//               style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
//             />
//           </div>
//       </div>
//             <MdOutlineCancel size="25px" className="procicons" />
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ProductCategoryPopup;
