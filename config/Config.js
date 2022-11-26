import React from "react"

async function FetchAllMarkets() {
    const token = 'token';
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    query: `
                        query{
                            allMercados { id name location image}
                        }            
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allMercados
    } catch (error) {
        console.log(error);
        return error
    }
}
async function FetchProductsByID(id_Product) {
    console.log("id produto = " + id_Product)
    const token = 'token';
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    query: `
                        query ListarProdutos($idProduct: ItemId){
                            allProdutos(filter: { id: { eq: $idProduct } }) { 
                                id nome marca barcode imagem}
                        }            
                        `,
                        variables: {
                            idProduct: id_Product,
                        },
                }),

            }
        )
        const data = await res.json()
        console.log("printing data")
        console.log(data.data.allProdutos)
        return data.data.allProdutos
    } catch (error) {
        console.log(error);
        return error
    }
}


/*

async function FetchAllMarketProductsByMarketID(id_Market) {
    const token = 'token';

    fetch(
    'https://graphql.datocms.com/',
    {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `
            query ProdutosMercadoID($idMarket: ItemId) {
                allMercadoProdutos(filter: { idMercado: { eq: $idMarket } }) {
                  idProduto{id}
                }
              }           
                `,
            variables: {
                    idMarket: id_Market
                },
        }),

    }
    )
    .then(res => res.json())
    .then((res) => {
    console.log(res.data.allMercadoProdutos)
    return res.data.allMercadoProdutos
    })
    .catch((error) => {
    console.log(error);
    });
}

*/

async function FetchAllMarketProductsByMarketID(id_Market) {
    const token = 'token';
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    query: `
                    query ProdutosMercadoID($idMarket: ItemId) {
                        allMercadoProdutos(filter: { idMercado: { eq: $idMarket } }) {
                          idProduto{
                                id nome marca barcode imagem
                            }
                        }
                      }           
                        `,
                    variables: {
                            idMarket: id_Market
                        },
                }),

            }
        )
        const data = await res.json()
        console.log(data.data.allMercadoProdutos)
        return data.data.allMercadoProdutos
    } catch (error) {
        console.log(error);
        return error
    }
}


export { FetchAllMarkets, FetchProductsByID, FetchAllMarketProductsByMarketID }