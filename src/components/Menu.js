import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';
const Menu = () => {
  const handleOrder = (id) => {
    console.log(id, "id is clicked");
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this"
      icon: 'Warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6'
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, order this'
  }).then((result => {
  Swal.fire(
    'Your order is placed',
    'Your order has been processed',
    'Order Successful'
    )
  }
           })
          }
  return (
    <div className='menu-container'>
    div className='menu-header'>
      <h2>Special Offers!</h2>
  <button>Order Menu</button>
    </div>
  <div className='cards'>
    {
      recipes.map(recipe => <div key={recipe.id} className='menu-items'>
      <img src={recipe.image} alt=''/>
  <div className='menu-content'>
    <div className='heading'>
  <h5>{recipe.title}</h5>
  <p>{recipe.price)</p>
  </div>
  <p>{recipe.description}</p>
  <button className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order</button>
</div>
</div>
}
</div>
</div>
);
};
export default Menu;
