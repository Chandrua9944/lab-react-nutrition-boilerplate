import { useState } from 'react'; 
import PropTypes from 'prop-types'; 

const FoodBox = ({ id, img, name, cal, handleAdd }) => {
  const [quantity, setQuantity] = useState(0); 

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    setQuantity(isNaN(value) ? 0 : value); 
  };

  const handleAddClick = () => {
    handleAdd(id, quantity); 
    setQuantity(0); 
  };

  return (
    <div className="box">
      <figure className="image">
        <img src={img} height="60px" alt={name} />
      </figure>
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{cal} cal</small>
        </p>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="0" // 
            />
          </div>
          <div className="control">
            <button className="button is-info" onClick={handleAddClick}>
              +
            </button>
          </div>
        </div>
        <div className="control">
          <button className="button" onClick={() => setQuantity(0)}>
            Reset
          </button>
        </div>
      </div>
      <div>
        <p>
          {quantity} {name} = {quantity * cal} calories
        </p>
      </div>
    </div>
  );
};

FoodBox.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cal: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default FoodBox;
