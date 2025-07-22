import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedService, setSelectedService] = useState('all');

  const services = [
    { id: 'children', name: 'Детская стоматология', age: '0-17 лет', icon: 'Baby', color: 'bg-dental-green' },
    { id: 'adult', name: 'Взрослая стоматология', age: '18-65 лет', icon: 'User', color: 'bg-dental-blue' },
    { id: 'senior', name: 'Возрастная стоматология', age: '65+ лет', icon: 'Heart', color: 'bg-dental-accent' },
  ];

  const familyPhotos = [
    { src: '/img/14162324-8621-4bbf-a87d-d239d99ff666.jpg', alt: 'Счастливая семья в клинике' },
    { src: '/img/2452f62d-7e1a-454e-9a07-eec19cf99011.jpg', alt: 'Детский приём' },
    { src: '/img/639bc80a-f72a-4438-8f14-adfd7c5c942f.jpg', alt: 'Наша клиника' },
  ];

  const team = [
    { name: 'Иванова Елена', specialty: 'Главный врач', experience: '15 лет', photo: '👩‍⚕️' },
    { name: 'Петров Михаил', specialty: 'Детский стоматолог', experience: '8 лет', photo: '👨‍⚕️' },
    { name: 'Сидорова Анна', specialty: 'Ортодонт', experience: '12 лет', photo: '👩‍⚕️' },
  ];

  const prices = [
    { service: 'Консультация', price: '500₽', category: 'all' },
    { service: 'Лечение кариеса', price: '2500₽', category: 'all' },
    { service: 'Детская чистка', price: '1200₽', category: 'children' },
    { service: 'Брекеты', price: '45000₽', category: 'adult' },
    { service: 'Протезирование', price: 'от 8000₽', category: 'senior' },
  ];

  const reviews = [
    { name: 'Мария К.', text: 'Отличная клиника! Дети не боятся ходить к врачу', rating: 5 },
    { name: 'Александр И.', text: 'Профессиональный подход, современное оборудование', rating: 5 },
    { name: 'Екатерина Л.', text: 'Вежливый персонал, удобная запись онлайн', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Мобильная навигация */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-dental-gray z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-montserrat font-bold text-dental-blue">СтомДом.ру</h1>
            <Button variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Главный баннер с каруселью */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-dental-blue/5 to-dental-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dental-blue mb-4">
              Семейная стоматология
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Профессиональный уход за здоровьем всей семьи
            </p>
            <Button className="bg-dental-blue hover:bg-dental-blue/90 text-white px-8 py-3">
              Записаться на приём
            </Button>
          </div>

          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {familyPhotos.map((photo, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-0">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-64 object-cover rounded-lg"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Услуги по возрастам */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-montserrat font-bold text-center mb-8">Услуги по возрастам</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <h4 className="font-montserrat font-semibold mb-2">{service.name}</h4>
                  <Badge variant="secondary">{service.age}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Наша команда */}
      <section className="py-12 bg-dental-gray/30">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-montserrat font-bold text-center mb-8">Наша команда</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((doctor, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{doctor.photo}</div>
                  <h4 className="font-montserrat font-semibold mb-2">{doctor.name}</h4>
                  <p className="text-dental-blue mb-1">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600">Стаж: {doctor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-montserrat font-bold text-center mb-8">Прайс-лист</h3>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-dental-gray/50 last:border-b-0">
                    <span>{item.service}</span>
                    <span className="font-semibold text-dental-blue">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Форма записи */}
      <section className="py-12 bg-dental-blue/5">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-montserrat font-bold text-center mb-8">Онлайн запись</h3>
          
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="service">Услуга</Label>
                  <Input id="service" placeholder="Консультация" />
                </div>
                <div>
                  <Label htmlFor="message">Дополнительно</Label>
                  <Textarea id="message" placeholder="Особые пожелания" />
                </div>
                <Button className="w-full bg-dental-green hover:bg-dental-green/90">
                  Записаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-montserrat font-bold text-center mb-8">Отзывы пациентов</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="font-semibold mr-2">{review.name}</span>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-dental-beige fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты и футер */}
      <footer className="bg-dental-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat font-bold text-xl mb-4">СтомДом.ру</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3" />
                  <span>ул. Здоровья, 123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3" />
                  <span>Пн-Пт: 8:00-20:00, Сб: 9:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-xl mb-4">Парковка</h4>
              <Button variant="secondary" className="mb-4">
                <Icon name="Navigation" size={20} className="mr-2" />
                Построить маршрут
              </Button>
              <p className="text-sm opacity-90">Бесплатная парковка для пациентов</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="opacity-75">© 2024 СтомДом.ру - Семейная стоматология</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;