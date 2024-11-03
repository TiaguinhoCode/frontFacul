import Banner from "@/components/banner";
import ContainerCatalog from "@/components/container/catalogContainer";

export default async function KimasterPage() {
    const res = await fetch("http://localhost:3000/v1/products/catalogs?brand=Kimaster", {
        cache: 'no-store' // Para garantir que estamos buscando dados frescos a cada acesso
    });
    const products = await res.json();

    return (
        <>
            <Banner />
            <ContainerCatalog brand="Kimaster" data={products.products}/>
        </>
    );
}
