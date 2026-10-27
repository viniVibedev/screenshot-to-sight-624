// Dados editáveis da Dogson Barbearia — TODOS centralizados aqui.
// Preços mostrados como referência; confirme os valores atuais pelo Booksy.

export const business = {
  name: "Dogson Barbearia",
  city: "Taboão da Serra — SP",
  address: {
    street: "Estrada São Francisco, 1070",
    district: "Jardim Henriqueta",
    city: "Taboão da Serra — SP",
    zip: "06764-290",
  },
};

export const links = {
  booking: "https://booksy.com/pt-br/74225_dogson-barbearia_barbearias_944115_taboao-da-serra",
  whatsappNumber: "5511986749753",
  instagram: null as string | null, // preencher quando houver o perfil oficial
  googleProfile:
    "https://www.google.com/maps/search/?api=1&query=Dogson%20Barbearia%2C%20Tabo%C3%A3o%20da%20Serra&query_place_id=ChIJJUzkrhNUzpQR7jT8h6Y9-m4",
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Estrada São Francisco, 1070, Jardim Henriqueta, Taboão da Serra - SP, 06764-290"),
};

export const whatsappMessage =
  "Olá! Gostaria de consultar os horários disponíveis na Dogson Barbearia.";

export const whatsappUrl = links.whatsappNumber
  ? `https://wa.me/${links.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : null;

export type ServiceCategory = "Cortes" | "Barba e acabamento" | "Cuidados e adicionais";
export type Service = {
  name: string;
  price: number;
  combo?: boolean;
  highlight?: boolean;
  desc?: string;
  category?: ServiceCategory;
};

export const services: Service[] = [
  { name: "Degradê", price: 45, desc: "Transições bem trabalhadas para um visual marcante.", category: "Cortes" },
  { name: "Degradê “tchabas”", price: 40, category: "Cortes" },
  { name: "Corte social", price: 45, desc: "Um clássico que combina com diferentes estilos.", category: "Cortes" },
  { name: "Corte infantil", price: 45, desc: "Estilo e praticidade para os pequenos.", category: "Cortes" },
  { name: "Raspar careca", price: 35, category: "Cortes" },
  { name: "Barba simples", price: 30, desc: "Atenção aos detalhes para completar seu visual.", category: "Barba e acabamento" },
  { name: "Degradê + sobrancelha", price: 50, combo: true },
  { name: "Corte e barba", price: 70, desc: "Renove o visual de uma só vez.", combo: true, highlight: true },
  { name: "Corte e barba com toalha", price: 80, combo: true },
  { name: "Corte, barba e progressiva", price: 180, combo: true },
  { name: "Pezinho / acabamento", price: 20, desc: "Os detalhes que fazem a diferença.", category: "Barba e acabamento" },
  { name: "Depilação nasal / orelhas", price: 20, category: "Cuidados e adicionais" },
  { name: "Secagem com água de progressiva", price: 25, category: "Cuidados e adicionais" },
];

// Horários pendentes de confirmação.
export const hours: { days: string; time: string }[] | null = null;

export const team: { name: string; nickname?: string; photo?: string; bio?: string }[] = [
  { name: "Dogson", nickname: "Douglas" },
  { name: "Vitor" },
  { name: "Gustavoo" },
];

// Nota e total encontrados no perfil do Google na consulta de 27/10/2026.
// São dados estáticos: confira de tempos em tempos se continuam atuais.
export const rating: { score: string; count: number } | null = { score: "4,9", count: 181 };

// Não colocar avaliações como se fossem reais sem conferir e autorizar os trechos.
export const reviews: { text: string; author: string }[] = [];
