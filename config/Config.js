

async function FetchAllMarkets() {
    console.log("hora de buscar mercados")
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
        console.log(data.data.allProdutos)
        return data.data.allProdutos
    } catch (error) {
        console.log(error);
        return error
    }
}

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
                                id nome marca barcode imagem preco
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
        console.log(data.data.allMercadoProdutos == [])
        if (data.data.allMercadoProdutos == []){
            throw "Error"
        }
        
        return data.data.allMercadoProdutos
        
    } catch (error) {
        console.log(error);
        return error
    }
}


async function FetchReadings(currentPrice, dataTime, idProduct) {
    const token = 'token';
    try {
        const res = await fetch(
            'https://site-api.datocms.com/items',
            {
                method: 'POST',
                headers: {
                    'X-Api-Version': 3,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    
                        "data": {
                          "type": "item",
                          "attributes": {
                            "precoatual": currentPrice,
                            "datatime": dataTime,
                            "idproduto": idProduct
                          },
                          "relationships": {
                            "item_type": {
                              "data": {
                                "type": "item_type",
                                "id": "826953"
                              }
                            }
                          }
                        }          
        
                }),

            }
        )
        const data = await res.json()
        console.log("Reposta do create:")
        console.log(data)
        console.log("id da consultda = " + data.data.id)
        
        return data.data.id
    } catch (error) {
        console.log(error);
        return error
    }
}

async function PublishReadings(idProduct) {
    const token = 'token';
    try {
        const res = await fetch(
            `https://site-api.datocms.com/items/${idProduct}/publish?recursive=true`,
            {
                method: 'PUT',
                headers: {
                    'X-Api-Version': 3,
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        )
        const data = await res.json()

        
        return "Data successfully published"
        
    } catch (error) {
        console.log(error);
        return error
    }
}
async function DeleteReadings(idProduct) {
    console.log("ITEM ID = " + idProduct)
    const token = 'token';
    try {
        const res = await fetch(
            `https://site-api.datocms.com/items/${idProduct}`,
            {
                method: 'DELETE',
                headers: {
                    'X-Api-Version': 3,
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        )
        const data = await res.json()

        
        return "Item deleted successfully"
        
    } catch (error) {
        console.log(error);
        return error
    }
}

async function FetchProductsByBarcode(barcode, idMarket) {
    console.log("barcode produto = " + barcode)
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
                    query ListarProdutosByBarcode($barcode: String){
                        allProdutos(filter: { barcode: { eq: $barcode } }) { 
                             id nome marca barcode imagem preco}
                    }                
                        `,
                        variables: {
                            barcode: barcode,
                            idMarket: idMarket,
                        },
                }),

            }
        )
        const data = await res.json()
        
        if (data.data.allProdutos == []){
            throw "Error"
        }
        
        return data.data.allProdutos[0]
        
    } catch (error) {
        console.log(error);
        return error
    }
}

async function FetchReadingsByIdProduct(id_Product) {
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
                    query ListarConsultas($idProduct: ItemId){
                        allLeituras(filter: { idproduto: { eq: $idProduct } }) { 
                             id
                             precoatual 
                             datatime
                             }
                    }             
                        `,
                        variables: {
                            idProduct: id_Product,
                        },
                }),

            }
        )
        const data = await res.json()
        console.log(data.data.allLeituras)
        return data.data.allLeituras
    } catch (error) {
        console.log(error);
        return error
    }
}



export { FetchAllMarkets, FetchProductsByID, FetchAllMarketProductsByMarketID, FetchProductsByBarcode, FetchReadings, PublishReadings, FetchReadingsByIdProduct, DeleteReadings}