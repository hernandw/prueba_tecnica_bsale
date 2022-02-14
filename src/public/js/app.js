const productos = document.getElementById('productos');

document.addEventListener("DOMContentLoaded", e =>{
    fechData()
});

const fechData = async () => {
    try {
        const res = await fetch('/product/api')
        const data = await res.json()
        productTienda(data)
        formularioProductos(data)
    } catch (error) {
        console.log(error)
    }
}

const productTienda = data => {
    let elementos = '';
    data.forEach(item => {
elementos += `
<article class="card">
                    <img class="img-fluid" src=${item.url_image} />
                    <div class="card-content">
                        <h3>
                        ${item.name}
                        </h3>
                        
                        <h3>$ ${item.price}
                        </h3>
                       <a class="btn btn-primary" href=/product/${item.id} >Ver Ficha</a>
                    </div>
                </article>
`
        
    });
    productos.innerHTML = elementos
}