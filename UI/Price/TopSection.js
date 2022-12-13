
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Style from "../../styles/PriceCss/Price.module.css"
const Price = () => {
    return (
        <>
            <div className={Style.TopMain}>
                <div>
                    <p className={Style.TopTitle}> T-Shirt</p>
                </div>


                <div className={Style.TopOptions}>
                    <p className={Style.TopOptionsText}> Home - Mens Clothing - T-shirt</p>
                    <p className={Style.TopOptionsText}> 30 Products Found</p>
                    <div>
                        <DropdownButton variant="light" id="dropdown-basic-button" title="Sort By">
                            <Dropdown.Item href="#/action-1">Price High</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Price Low</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Price