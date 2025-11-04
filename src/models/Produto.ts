import type Categoria from './Categoria'

export default interface Produto{
    id: number;
    nome: string;
    descricao?: string | null;
    preco: number;
    foto?: string | null;
    categoria?: Categoria | null;
}