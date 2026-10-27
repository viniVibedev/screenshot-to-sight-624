// Dados editáveis da Dogson Barbearia — TODOS centralizados aqui.
// Campos `null` = dado PENDENTE de confirmação. A página mostra "a confirmar"
// em vez de inventar informação.

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
  booking: null as string | null, // PENDENTE: link oficial do Booksy
  whatsappNumber: null as string | null, // PENDENTE: ex. "5511999999999"
  instagram: null as string | null, // PENDENTE: URL do perfil oficial
  googleProfile: null as string | null, // PENDENTE: perfil oficial no Google
  // Navegação por busca do endereço (sem coordenadas inventadas)
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Estrada São Francisco, 1070, Jardim Henriqueta, Taboão da Serra - SP, 06764-290"),
};

export const whatsappMessage =
  "Olá! Gostaria de consultar os horários disponíveis na Dogson Barbearia.";

export const whatsappUrl = links.whatsappNumber
  ? `https://wa.me/${links.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : null;

// Preços PROVISÓRIOS — confirmar antes de publicar.
export type Service = { name: string; price: number; combo?: boolean; highlight?: boolean };
export const services: Service[] = [
  { name: "Degradê", price: 45 },
  { name: "Degradê “tchabas”", price: 40 },
  { name: "Corte social", price: 45 },
  { name: "Corte infantil", price: 45 },
  { name: "Raspar careca", price: 35 },
  { name: "Barba simples", price: 30 },
  { name: "Degradê + sobrancelha", price: 50, combo: true },
  { name: "Corte e barba", price: 70, combo: true, highlight: true },
  { name: "Corte e barba com toalha", price: 80, combo: true },
  { name: "Corte, barba e progressiva", price: 180, combo: true },
  { name: "Pezinho / acabamento", price: 20 },
  { name: "Depilação nasal / orelhas", price: 20 },
  { name: "Secagem com água de progressiva", price: 25 },
];

// PENDENTE: horários divergentes nas fontes — preencher quando confirmados.
export const hours: { days: string; time: string }[] | null = null;

// Equipe: fotos e descrições a inserir quando houver material autorizado.
export const team: { name: string; nickname?: string; photo?: string; bio?: string }[] = [
  { name: "Dogson", nickname: "Douglas" },
  { name: "Vitor" },
  { name: "Gustavoo" },
];

// PENDENTE: confirmar nota/quantidade no Google antes de exibir (4,9 / 184 informados).
export const rating: { score: string; count: number } | null = null;

// Apenas trechos reais e autorizados.
export const reviews: { text: string; author: string }[] = [];
