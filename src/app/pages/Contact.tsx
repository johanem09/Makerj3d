import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hola! Mi nombre es ${formData.name}.\n\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje: ${formData.message}`
    );

    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');

    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => {
      setFormStatus('idle');
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@makerj3d.com',
      link: 'mailto:info@makerj3d.com',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+57 300 123 4567',
      link: 'tel:+573001234567',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Bogotá, Colombia',
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/makerj3d',
      color: 'hover:bg-pink-50 hover:text-pink-600',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/makerj3d',
      color: 'hover:bg-blue-50 hover:text-blue-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-[#5B21B6] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Contáctanos</h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            ¿Tienes preguntas o quieres hacer un pedido? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-6 sm:p-8">
                <h2 className="mb-6">Envíanos un mensaje</h2>

                {formStatus === 'success' && (
                  <div
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800"
                    role="alert"
                  >
                    <p>¡Mensaje enviado! Te contactaremos pronto.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Nombre completo <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Correo electrónico <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Mensaje <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Información de contacto</h2>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-start gap-4 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        >
                          <div className="bg-primary/10 p-3 rounded-xl">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-xl">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="mb-4">Síguenos en redes sociales</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-3 border border-border rounded-xl transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${social.color}`}
                      aria-label={`Visitar ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="p-6 bg-gradient-to-br from-primary to-[#5B21B6] text-white">
                <h3 className="mb-4">Horario de atención</h3>
                <div className="space-y-2 text-purple-100">
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 10:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
          <p className="text-center text-muted-foreground mb-12">
            Encuentra respuestas rápidas a las preguntas más comunes
          </p>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="mb-2">¿Cuánto tiempo tarda la producción?</h3>
              <p className="text-muted-foreground">
                El tiempo de producción varía según el producto, generalmente entre 3-7 días
                hábiles. Te informaremos el tiempo exacto al confirmar tu pedido.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">¿Hacen envíos a toda Colombia?</h3>
              <p className="text-muted-foreground">
                Sí, realizamos envíos a todo el país. Los costos de envío se calculan según
                la ubicación de entrega.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">¿Puedo personalizar los colores?</h3>
              <p className="text-muted-foreground">
                ¡Por supuesto! Todos nuestros productos pueden personalizarse en color.
                Contáctanos para conocer las opciones disponibles.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
