let icecreams = [
    {
        id: 1,
        name: 'vanilla',
        price: 6.50,
        imgUrl: 'https://static.toiimg.com/thumb/63971154.cms?width=573&height=430'
    },
    {
        id: 2,
        name: 'chocolate',
        price: 6,
        imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/190328-chocolate-ice-cream-020-1553897042.jpg'
    },
    {
        id: 3,
        name: 'sundae',
        price: 10.00,
        imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/04/Hot-Fudge-Sundae-Feature.jpg'
    },
    {
        id: 4,
        name: 'sorbet',
        price: 8.00,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGOefel46oMfVXN2Hv_ocyo6VSYUWwE3LZQ&usqp=CAU'
    }
]

let cart = []

function drawicecream() {
    let template = ''
    icecreams.forEach(ic => {
        template += `
        <div class="col-4 d-flex justify-content-center">
        <div class="card my-5 text-center" style="width: 12rem;">
            <h5 class="card-title">${ic.name}</h5>
            <img class="card-img-top" src="${ic.imgUrl}"
                alt="Card image cap">
            <div class="card-body p-1 d-flex justify-content-between align-items-center">
                <h5 class="card-title">Price:${ic.price}</h5>
                <a href="#" onclick="buy(${ic.id})"  class="btn btn-success">Buy</a>
            </div>
        </div>
    </div>
    `

    })
    document.getElementById('icecream').innerHTML = template
}
function drawcart() {
    let template = ''
    cart.forEach(item => {
        template += `  
                <div class="col-12">
                 <div class="card my-5 w-75 h-25">
                        <div class="card-body">
                            <h5 class="card-title text-center ">Cart</h5>
                            <div class="d-flex justify-content-between">

                                <h5 class="card-text">${item.name}</h5>
                                <h5 class="me-5">${item.price}</h5>
                            </div>
                            <div class="d-flex justify-content-between align-items-end">
                                <h5>Total:</h5>
                                <a href="#" class="btn btn-primary">checkout</a>

                            </div>
                        </div>
                    </div>
                </div>
                </div>

`



    })
    document.getElementById('cart').innerHTML = template
}


function buy(id) {
    let ic = icecreams.find(ic => ic.id == id)
    console.log('id: ', id, 'icecream: ', ic);
    cart.push(ic)
    console.log(cart);

}
drawcart()
drawicecream()