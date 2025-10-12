import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es una autoedición?",
      answer: "Una autoedición es un libro publicado directamente por su autor, sin pasar por una editorial tradicional. En WeBook, cada autoedición se imprime bajo demanda, lo que significa que tu libro se produce solo cuando alguien lo compra, sin necesidad de grandes inventarios.",
    },
    {
      question: "¿Cómo funciona WeBook?",
      answer: "WeBook es una plataforma de publicación bajo demanda. Los autores suben sus manuscritos, nosotros nos encargamos de la impresión profesional y distribución. Cada vez que alguien compra un libro, lo imprimimos y enviamos directamente. Esto elimina riesgos de inventario y hace la publicación accesible para todos los autores.",
    },
    {
      question: "¿Dónde puedo conseguir mi libro?",
      answer: "Todos los libros de Autoediciones WeBook están disponibles para compra en nuestra tienda online. Una vez que realizas tu pedido, imprimimos tu libro con calidad profesional y lo enviamos directamente a tu domicilio en Chile. Los tiempos de entrega varían según tu ubicación.",
    },
    {
      question: "¿Cuál es la calidad de impresión?",
      answer: "Utilizamos tecnología de impresión profesional que garantiza la misma calidad que las editoriales tradicionales. Papel de alta calidad, impresión nítida y encuadernación duradera. Cada libro es revisado antes de ser enviado.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas saber sobre Autoediciones WeBook
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
