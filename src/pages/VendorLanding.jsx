import React from "react";
import Header from '../components/VendorHeader'
import '../styles/vendor/vendor.css';
import SignIn from '../components/vendor/SignIn'
import SignUp from '../components/vendor/SignUp'
import Modal from 'react-modal';

const Vendor = ()=> {


    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
        padding: 0,
          bottom: 'auto',
          borderRadius: 50,
          marginRight: '-50%',
         
          transform: 'translate(-50%, -50%)',
        },
      };
      let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }
    return(
        <div>
            <Header/>
            <div className="body">
                <h1>
                Make more money while selling on Atoovis
                </h1>
                <p>
                Nunc quisque sapien diam risus. Id blandit viverra velit sed at ultrices tortor
Ullamcorper turpis diam odio ac cursus tempor tempor varius 
Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                </p>

                <button onClick={openModal}>
                Start Selling
                </button>
            </div>

            <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className=" mode"
      > 
      <SignUp/>
     
      </Modal>
        </div>
    )
}

export default Vendor