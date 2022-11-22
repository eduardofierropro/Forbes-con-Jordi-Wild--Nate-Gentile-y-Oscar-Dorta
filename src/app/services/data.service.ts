import { Injectable } from '@angular/core';
import { IInfluencer, ISticky } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    public influencers : IInfluencer[] =  [
       /*  {
          href: "creativity",
          titulo: "Creativity",
          datos: [
            {
              
              
              nombre: "JORDI KOALITIC",
              imagen: "assets/influencers/jordi-koalitic.jpg",
              grande: true,
              categoria: "Creativity",
              rrss: [
                {
                  instagram: "@jordi.koalitic"
                },
                {
                  youtube: "@jordi.koalitic"
                },
                {
                  twitter: "@jordi.koalitic"
                },
                {
                  tiktok: "@jordi.koalitic"
                }
              ],
              descripcion: "Detrás del proyecto de fotografía creativa Jordi Koalitic se encuentran dos hermanos apasionados por la imagen: Jordi y Arnau Puig (1992). Estos jóvenes catalanes muestran el making of de sus procesos creativos, y lo hacen de forma sencilla y sincera, dando lugar a espectaculares fotografías. Los hermanos Puig han conquistado a casi 20 millones de seguidores en TikTok, siendo los primeros españoles que cobraron por sus contenidos en la plataforma china. Eso no es todo, además de las redes, han creado su propia productora, Koalitic Visuals, donde trabajan con marcas globales y grandes profesionales del mundo audiovisual."
            }
          ]
        }, */
       
        {
          href: "lifestyle",
          titulo: "Lifestyle",
          datos: [
            {
              
              nombre: "Oscar Dorta",
              imagen: "assets/influencers/oscar-dota.jpg",
              categoria: "Lifestyle",
              grande : true,
              rrss: [
                {
                  instagram: "@maarta_diaz"
                },
                {
                  youtube: "@maarta_diaz"
                },
                {
                  twitter: "@maarta_diaz"
                },
                {
                  tiktok: "@maarta_diaz"
                }
              ],
              descripcion: "Oscar es especialista en doblar escenas de riesgo, y se juega su vida en cada rodaje. Ha sido premiado con el Yago al no reconocido en 2019, tras una larga trayectoria defendiendo y luchando por el reconocimiento de los especialistas de acción. Comenzó muy joven, con tan solo 19 años, salió de su isla natal, Tenerife. Después de varios años de entrenamiento y dedicación, consiguió entrar en el mundo de los espectáculos en vivo, un trabajo duro y extenuante, para más tarde, iniciarse en el mundo del cine, su pasión, aventura que dura hasta hoy mismo. Ha rodado en Tenerife, Las Palmas, Lanzarote y Fuerteventura producciones nacionales e internacionales."
            },
            {
              
              
              nombre: "MARTA DÍAZ",
              imagen: "assets/influencers/marta-diaz.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@maarta_diaz"
                },
                {
                  youtube: "@maarta_diaz"
                },
                {
                  twitter: "@maarta_diaz"
                },
                {
                  tiktok: "@maarta_diaz"
                }
              ],
              descripcion: "Muy activa en redes sociales, suma más de 10 millones de seguidores entre sus principales plataformas: TikTok, Instagram y YouTube. Lo de ser influencer lo lleva en la sangre y es que es hermana de AlphaSniper97, un potente youtuber de gameplays. Marta comenzó a experimentar pronto con las redes sociales, destacando por sus bailes y sus “arréglate conmigo”. Comparte su rutina diaria en el gimnasio, su día a día y algunas píldoras de su relación con el futbolista del Atlético de Madrid, Sergio Reguilón. Este año ha asistido a grandes estrenos y eventos, de la talla del Festival de Cannes, Coachella o la Velada del año."
            },
            {
              
              nombre: "MÓNICA MORÁN",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Monica-Moran-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@monismurf"
                },
                {
                  youtube: "@monismurf"
                },
                {
                  twitter: "@monismurf"
                },
                {
                  tiktok: "@monismurf"
                }
              ],
              descripcion: "En el primer mes en TikTok alcanzó los 100.000 seguidores y ya está cerca de los 10 millones. Estrella de la red social de moda comparte bailes, retos o<em>nailart</em>con transiciones muy trabajadas. Este año ha sacado su tercer libro donde narra su vida detrás de las redes."
            },
            {
              
              nombre: "PAULA ECHEVARRÍA",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Paula-Echevarria-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@pau_eche"
                },
                {
                  youtube: "@pau_eche"
                },
                {
                  twitter: "@pau_eche"
                },
                {
                  tiktok: "@pau_eche"
                }
              ],
              descripcion: "La actriz ha sabido sacar el máximo partido a las redes sociales convirtiéndose en toda una it girl. Tras años subiendo looks a un blog, ahora dirige su propia marca de ropa, Space Flamingo. Además de sus rompedores estilismos comparte sus entrenamientos, memes y su maternidad."
            },
            {
              
              nombre: "FRANCISCO BORSOI",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Borsoi-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@borsoi"
                },
                {
                  youtube: "@borsoi"
                },
                {
                  twitter: "@borsoi"
                },
                {
                  tiktok: "@borsoi"
                }
              ],
              descripcion: "Desde una perspectiva artística y sofisticada comparte lo mejor de su día a día, looks, momentos con sus amigos, su pareja, viajes y algunas bromas. Utilizando casi siempre la lengua de Shakespeare, este brasileño afincado en Madrid trabaja con grandes marcas."
            },
            {
              
              nombre: "ESTER EXPÓSITO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Ester-Exposito-400x400.jpg?crop=1",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@ester_exposito"
                },
                {
                  youtube: "@ester_exposito"
                },
                {
                  twitter: "@ester_exposito"
                },
                {
                  tiktok: "@ester_exposito"
                }
              ],
              descripcion: "Es una de las actrices del momento y todo lo que toca, o publica, se convierte en oro. Llegó a ser la española con más seguidores de Instagram y actualmente ocupa el segundo puesto con 29 millones. Sus posados, looks de alfombra roja y selfies acumulan millones de likes."
            },
            {
              
              nombre: "CRISTINA PEDROCHE",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Cristina-Pedroche-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@cristipedroche"
                },
                {
                  youtube: "@cristipedroche"
                },
                {
                  twitter: "@cristipedroche"
                },
                {
                  tiktok: "@cristipedroche"
                }
              ],
              descripcion: "Presentadora, modelo y colaboradora de televisión ligada a Atresmedia desde que se dio a conocer en 2010. En las redes, muestra su amor por el deporte y por la cocina, acompañando siempre a su marido, el chef Dabiz Muñoz."
            },
            {
              
              nombre: "LAURA CORSINI",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Laura-Corsini-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@birmani13"
                },
                {
                  youtube: "@birmani13"
                },
                {
                  twitter: "@birmani13"
                },
                {
                  tiktok: "@birmani13"
                }
              ],
              descripcion: "La CEO de Bimani arrasa por su naturalidad y pasión por la moda. Lo demuestra con las prendas de su marca, pensadas para adaptarse al cuerpo de la mujer, versátiles y sin necesidad de planchado. Este verano ha encandilado con su boda de ensueño y hace poco estrenó cuenta personal."
            },
            {
              
              nombre: "VERÓNICA COSTA",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Vikikacosta-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@vikikacosta"
                },
                {
                  youtube: "@vikikacosta"
                },
                {
                  twitter: "@vikikacosta"
                },
                {
                  tiktok: "@vikikacosta"
                }
              ],
              descripcion: "Se ha convertido en una estrella del fitness. Defendiendo un estilo de vida saludable, ha fundado dos empresas de entreno online y nutrición: Entrena Virtual y Vikika Team. En redes, sus seguidores han sido testigos de su embarazo y de la realidad del posparto. Eso sí, siempre en forma."
            },
            {
              
              nombre: "VERÓNICA DÍAZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Veronica-Diaz-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@modajustcoco"
                },
                {
                  youtube: "@modajustcoco"
                },
                {
                  twitter: "@modajustcoco"
                },
                {
                  tiktok: "@modajustcoco"
                }
              ],
              descripcion: "Lo que comenzó como un blog de periodismo de moda acabó congregando a casi un millón de suscriptores en Youtube e impulsando la creación de su propia marca, Crvsh. En las redes la influencer malagueña Verónica Díaz lleva más de diez años compartiendo su día a día."
            },
            {
              
              nombre: "CARLOS MARTÍN",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/ByCarlitos-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@byCalitos"
                },
                {
                  youtube: "@byCalitos"
                },
                {
                  twitter: "@byCalitos"
                },
                {
                  tiktok: "@byCalitos"
                }
              ],
              descripcion: "Carlos Martín dicta tendencia. El joven ha conseguido hacerse un hueco en el sector de la moda urbana y su éxito en YouTube lo ha llevado a crear una de las ferias de<em>streetwear</em>más importantes del país: Scrapworld. Un evento que agota entradas y cuenta con sponsors internacionales."
            },
            {
              
              nombre: "MARÍA POMBO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Maria-Pombo-1-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@mariapombo"
                },
                {
                  youtube: "@mariapombo"
                },
                {
                  twitter: "@mariapombo"
                },
                {
                  tiktok: "@mariapombo"
                }
              ],
              descripcion: "ADN emprendedor, María ha creado dos marcas de ropa y su propio festival, Suave Fest. Empezó a compartir su vida hace 10 años y ahora es una de las influencers más relevantes del país con una fuerte presencia mediática que la ha llevado a ganar el premio ‘Ídolo del año 2022’."
            },
            {
              
              nombre: "MANU RÍOS",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Manu-Rios-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@manurios"
                },
                {
                  youtube: "@manurios"
                },
                {
                  twitter: "@manurios"
                },
                {
                  tiktok: "@manurios"
                }
              ],
              descripcion: "Actor, modelo y cantante, conocido por su participación en Élite. Hace poco estrenaba La edad de la ira en febrero y se ha convertido en chico Almodóvar, con quien graba Extraña forma de vida. De joven, destacó en la obra de Los Miserables y ahora es una estrella también en redes."
            },
            {
              
              nombre: "GEORGINA RODRIGUEZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Georgina-Rodriguez-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@georginaglo"
                },
                {
                  youtube: "@georginaglo"
                },
                {
                  twitter: "@georginaglo"
                },
                {
                  tiktok: "@georginaglo"
                }
              ],
              descripcion: "Este ha sido su año, profesionalmente hablando. Ha estrenado una docuserie en Netflix, multiplicando su popularidad y triunfando allá donde va. Georgina lleva y muestra una vida de lujo, pero a la vez comparte de forma humilde la familia que ha formado junto a Cristiano Ronaldo."
            },
            {
              
              nombre: "TAMARA FALCÓ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Tamara-Falco-1-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@tamara_falco"
                },
                {
                  youtube: "@tamara_falco"
                },
                {
                  twitter: "@tamara_falco"
                },
                {
                  tiktok: "@tamara_falco"
                }
              ],
              descripcion: "La marquesa de Griñón es polifacética. Tiene una firma de ropa, un libro de recetas, es chef, colaboradora de televisión, diseñadora e influencer. La ganadora de la cuarta edición de MasterChef Celebrity comparte en Instagram su visión sobre la moda, la fe y sus creaciones culinarias."
            },
            {
              
              nombre: "ESTEFANÍA VERDELISS",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Estefi-Verdeliss-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@verdeliss"
                },
                {
                  youtube: "@verdeliss"
                },
                {
                  twitter: "@verdeliss"
                },
                {
                  tiktok: "@verdeliss"
                }
              ],
              descripcion: "Pionera en subir vlogs a YouTube (a modo de diario), cuando vivía lejos de su Pamplona natal, ahora triunfa también en Instagram donde supera el millón y medio de seguidores. Madre de familia numerosa, se comparte natural y muestra lo bueno y lo malo del embarazo, el parto y la crianza."
            },
            {
              
              nombre: "MARTA POMBO",
              imagen: "assets/influencers/marta-pombo.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@mpombor"
                },
                {
                  youtube: "@mpombor"
                },
                {
                  twitter: "@mpombor"
                },
                {
                  tiktok: "@mpombor"
                }
              ],
              descripcion: "La mediana de las Pombo se ha ganado un hueco en las redes con su frescura y espontaneidad. En su perfil habla sin tapujos de lo oscura que puede ser una depresión y de la importancia de la salud mental. Ahora, viviendo uno de sus mejores momentos, la influencer se encuentra enamorada y prometida del bilbaíno Luis Zamalloa. Ambos esperan la llegada de su primera hija, Matilda. Durante todo el embarazo, Marta ha seguido compartiendo sus rutinas, viajes, comidas y los largos paseos con su perrita. No abandona el trabajo ni a sus seguidores, ya que la madrileña sigue colaborando con las marcas y trabajando en la suya propia."
            },
            {
              
              nombre: "LAURA ESCANES",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Laura-Escanes-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@lauraescanes"
                },
                {
                  youtube: "@lauraescanes"
                },
                {
                  twitter: "@lauraescanes"
                },
                {
                  tiktok: "@lauraescanes"
                }
              ],
              descripcion: "La modelo saltó a la fama por su relación con Risto Mejide, pero no le debe nada. Gracias a las redes siempre ha tenido voz propia, tanto en Instagram como en TikTok, ahora también en Twitch. La madre de Roma tiene su propio salón de belleza y acaba de estrenar podcast con su pareja."
            },
            {
              
              nombre: "VIOLETA MANGRIÑÁN",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Violeta-Mangrin%CC%83an-1-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@violeta"
                },
                {
                  youtube: "@violeta"
                },
                {
                  twitter: "@violeta"
                },
                {
                  tiktok: "@violeta"
                }
              ],
              descripcion: "Se dio a conocer en diferentes programas de Telecinco. Este año ha tenido a sus seguidores enganchados al proceso de construcción de su casa y al nacimiento de su pequeña. No solo despunta en Instagram, en TikTok roza el millón de<em>followers</em>."
            },
            {
              
              nombre: "LAURA MATAMOROS",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Laura-Matamoros-400x400.jpg",
              categoria: "Lifestyle",
              rrss: [
                {
                  instagram: "@_lmflores"
                },
                {
                  youtube: "@_lmflores"
                },
                {
                  twitter: "@_lmflores"
                },
                {
                  tiktok: "@_lmflores"
                }
              ],
              descripcion: "Hija del colaborador de televisión Kiko Matamoros, ha sabido hacerse un hueco en el sector e impulsar su negocio, llegando a alcanzar el millón de seguidores en Instagram. La madrileña sube a la red su rutina, viajes, looks desenfadados y algunas pinceladas de su reciente maternidad."
            }
          ]
        },
        {
          href: "tecnologia",
          titulo: "Tecnología",
          datos: [
            {
              
              nombre: "NATE GENTILE",
              imagen: "assets/influencers/nate-gentile.jpg",
              categoria: "Tecnología",
              grande : true,
              rrss: [
                {
                  instagram: "@NateGentile"
                },
                {
                  youtube: "@NateGentile"
                },
                {
                  twitter: "@NateGentile"
                },
                {
                  tiktok: "@NateGentile"
                }
              ],
              descripcion: "Empezó a programar muy joven para convertirse en ingeniero de software y llegar a trabajar para empresas de videojuegos. Nate (Uruguay, 1990) decidió pronto apostar por YouTube, donde cuenta los entresijos de la tecnología, compara productos y da consejos sobre ciberseguridad."
            },
            {
              
              
              nombre: "JAUME LAHOZ Y CARLOS SANTA ENGRACIA",
              // imagen: "assets/influencers/topes-de-gama.jpg",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Jaume-Lahoz-y-Carlos-Santa-Engracia-400x400.jpg?crop=1",
              categoria: "Tecnología",
              rrss: [
                {
                  instagram: "@topesdegama"
                },
                {
                  youtube: "@topesdegama"
                },
                {
                  twitter: "@topesdegama"
                },
                {
                  tiktok: "@topesdegama"
                }
              ],
              descripcion: "Bajo el nombre de Topes de Gama, Jaume y Carlos reúnen casi tres millones y medio de suscriptores en YouTube. Su contenido se basa en reviews, novedades y comparativas de móviles, smartwatch y demás tecnología. También en IG, Twitter y TikTok."
            }, 
            {
              
              nombre: "La vida de Tomás",
              // imagen: "assets/influencers/la-vida-de-tomas.jpg",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Tomas-la-vide-de-400x400.jpg?crop=1",
              categoria: "Tecnología",
              rrss: [
                {
                  instagram: "@lavidadetomas"
                },
                {
                  youtube: "@lavidadetomas"
                },
                {
                  twitter: "@lavidadetomas"
                },
                {
                  tiktok: "@lavidadetomas"
                }
              ],
              descripcion: "Entrar en su TikTok, con más de dos millones de followers, es aprender un sinfín de cosas curiosas que probablemente nunca te habías preguntado. Ingeniero informático de profesión, enseña con humor y en pocos segundos cómo funciona la tinta electrónica o la tecnología de bluetooth."
            },
            {
              
              nombre: "EDUARD ESTELLER MADROÑAL",
              // imagen: "assets/influencers/eduard-madronal.jpg",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Eduard-Esteller-Madron%CC%83al-400x400.jpg?crop=1",
              categoria: "Tecnología",
              rrss: [
                {
                  instagram: "@ProAndroid"
                },
                {
                  youtube: "@ProAndroid"
                },
                {
                  twitter: "@ProAndroid"
                },
                {
                  tiktok: "@ProAndroid"
                }
              ],
              descripcion: "Empezó el canal en 2012 y tiene casi cuatro millones de seguidores en YouTube. En un escenario pro Apple triunfa en sus análisis sobre todo tipo de aparatos, especializado en Android. Destaca por sus trucos que ilustró en un libro, Cosas que nunca pensaste que podrías hacer con tu móvil."
            },
            {
              nombre: "CAROLINA DENIA",
              imagen: "assets/influencers/carolina-denia.jpg",
              categoria: "Tecnología",
              rrss: [
                {
                  instagram: "@clipset"
                },
                {
                  youtube: "@clipset"
                },
                {
                  twitter: "@clipset"
                },
                {
                  tiktok: "@clipset"
                }
              ],
              descripcion: "Esta periodista especializada en tecnología habla sobre móviles, robots para el hogar, cámaras, televisores, altavoces y hasta coches. Nada se le escapa y explica todo de manera rápida y sencilla para hacer entender el análisis del producto a su público que, en total, suma 2,75 millones."
            }
          ]
        },
        {
          href: "entretenimiento",
          titulo: "Entretenimiento",
          datos: [
            {
              
              nombre: "JORDI WILD",
              imagen: "assets/influencers/jordi-wild.jpg",
              grande : true,
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@TheWildProject"
                },
                {
                  youtube: "@TheWildProject"
                },
                {
                  twitter: "@TheWildProject"
                },
                {
                  tiktok: "@TheWildProject"
                }
              ],
              descripcion: "Jordi Wild es un actor, youtuber y modelo español, nacido en Barcelona (España) a mediados de los ochenta, conocido por ser uno de los creadores de contenido de la red más originales, completos y con más seguidores del panorama actual, sumando actualmente más de 12 millones de followers en el global de sus redes. Durante los últimos años, además de dedicarse a su canal de Youtube, donde ha entretenido a millones de personas cada mes, ha realizado una provechosa incursión en el mundo literario, con la publicación de su primera novela “Sueños de Acero y Neón”, seguido de un cómic llamado “Jorgemyte, Agente la P.E.M.”; ambos grandes éxitos con varias ediciones."
            },
            {
              
              nombre: "MELA PABÓN",
              // imagen: "assets/influencers/mela-pavon.jpg",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Mela-Pabon-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@checkinmela"
                },
                {
                  youtube: "@checkinmela"
                },
                {
                  twitter: "@checkinmela"
                },
                {
                  tiktok: "@checkinmela"
                }
              ],
              descripcion: "Triunfa con sus horóscopos ilustrados y consejos, ha publicado un libro –No eres tú, es el cosmos– y lee la carta astral a grandes artistas. Todo surgió por la necesidad de hacer humor tras un huracán en su Puerto Rico natal y acabó yendo de gira con el mismo Bad Bunny."
            },
            {
              
              nombre: "NIL OJEDA",
              // imagen: "assets/influencers/nil-ojeda.jpg",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Nil-Ojeda-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@NilOjeda"
                },
                {
                  youtube: "@NilOjeda"
                },
                {
                  twitter: "@NilOjeda"
                },
                {
                  tiktok: "@NilOjeda"
                }
              ],
              descripcion: "Parece dominar todas las plataformas. En YouTube arrasa con retos, curiosidades y un canal secundario más desenfadado. Locuras como un<em>unboxing</em>de un iPhone bajo el agua son habituales en su perfil. Ninguna red social se le resiste, sumando más de 10 millones entre todas sus cuentas."
            },
            {
              
              nombre: "RUBÉN GONZÁLEZ",
              // imagen: "assets/influencers/rubentones.jpg",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Rubenentoncess-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@rubentonces"
                },
                {
                  youtube: "@rubentonces"
                },
                {
                  twitter: "@rubentonces"
                },
                {
                  tiktok: "@rubentonces"
                }
              ],
              descripcion: "Este extremeño (1992) pasó a ser una estrella de las redes sociales sin esperarlo. Empezó subiendo vídeos de humor a Vine en 2012. Ahora, gracias a su originalidad, la afición se ha convertido en profesión y Rubén González supera el medio millón de seguidores en varias plataformas."
            },
            {
              
              nombre: "CAROLINA IGLESIAS",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Carolina-Iglesias-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@percebesygrelos"
                },
                {
                  youtube: "@percebesygrelos"
                },
                {
                  twitter: "@percebesygrelos"
                },
                {
                  tiktok: "@percebesygrelos"
                }
              ],
              descripcion: "A sus 29 años, esta cómica, guionista y youtuber gallega ha conseguido ganar el Premio Ondas a Mejor Podcast por Estirando el Chicle, junto a su compañera Victoria Martín. Pueden presumir de haber agotado en menos de 24 horas las doce mil entradas para su directo en el WiZink."
            },
            {
              
              nombre: "XUSO JONES",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Xuso-Jones-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@xusojones"
                },
                {
                  youtube: "@xusojones"
                },
                {
                  twitter: "@xusojones"
                },
                {
                  tiktok: "@xusojones"
                }
              ],
              descripcion: "Un pedido en una cadena de hamburgueserías impulsó a este artista murciano a la industria musical y televisiva. Cantante, también crea contenido de humor y entretenimiento en las redes, demostrando su pasión por la limpieza (habiendo lanzado incluso su propia marca de productos)."
            },
            {
              
              nombre: "DIEGO MERAYO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Diego-Merayo-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@telocuentosinspoilers"
                },
                {
                  youtube: "@telocuentosinspoilers"
                },
                {
                  twitter: "@telocuentosinspoilers"
                },
                {
                  tiktok: "@telocuentosinspoilers"
                }
              ],
              descripcion: "Apasionado de los medios de comunicación, Diego Merayo (1983) es la voz que acompaña a los oyentes de la Cadena SER de Castilla y León en A vivir que son dos días. Tras pasar por Youtube, ahora triunfa con su cuenta de TikTok, donde sube vídeos dinámicos hablando de cine."
            },
           
            {
              
              nombre: "JORGE OREJUDO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Jorge-Orejudo-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@goorgo"
                },
                {
                  youtube: "@goorgo"
                },
                {
                  twitter: "@goorgo"
                },
                {
                  tiktok: "@goorgo"
                }
              ],
              descripcion: "Empezó en el mundo del<em>gaming</em>en 2012 cuando solo tenía 13 años. Ahora, Goorgo es CEO del club Team Heretics, junto con su amigo y socio TheGrefg. El andaluz es también uno de los creadores de contenido españoles que más influencia tiene en los e-sports y en el juego Fortnite."
            },
            {
              
              nombre: "ANA BRITO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/AnaBrito-1-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@elshowdebriten"
                },
                {
                  youtube: "@elshowdebriten"
                },
                {
                  twitter: "@elshowdebriten"
                },
                {
                  tiktok: "@elshowdebriten"
                }
              ],
              descripcion: "Domina a la perfección el arte de parodiarse a sí misma, capaz de hacer humor sobre su mundo (el de los pijos). Lo dejó todo para dedicarse al entretenimiento. Mientras sus monólogos alcanzan miles de visualizaciones, prepara su nuevo podcast junto a Xuso Jones."
            },
            {
              
              nombre: "CRISTINA LÓPEZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Cristina-Lopez-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@lamcristinini"
                },
                {
                  youtube: "@lamcristinini"
                },
                {
                  twitter: "@lamcristinini"
                },
                {
                  tiktok: "@lamcristinini"
                }
              ],
              descripcion: "Lleva en el mundo de los videojuegos desde 2015, primero en YouTube y ahora arrasando con más de 3 millones de seguidores en Twitch. Streamer, apasionada de los e-sports y presentadora de eventos, la catalana ha conseguido hacerse un nombre en el sector y codearse con los mejores."
            },
            {
              
              nombre: "GUILLERMO DÍAZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Guillermo-Diaz-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@willyrex"
                },
                {
                  youtube: "@willyrex"
                },
                {
                  twitter: "@willyrex"
                },
                {
                  tiktok: "@willyrex"
                }
              ],
              descripcion: "Uno de los precursores de la creación de contenido en español sobre videojuegos. Willyrex ha publicado miles de vídeos y cerca de dos docenas de libros. A través de sus redes, sus seguidores han sido testigos de su paternidad y de su reciente matrimonio con la influencer Cristina Urbi."
            },
            {
              
              nombre: "DAVID CÁNOVAS",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Dani-Canovas-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@thegrefg"
                },
                {
                  youtube: "@thegrefg"
                },
                {
                  twitter: "@thegrefg"
                },
                {
                  tiktok: "@thegrefg"
                }
              ],
              descripcion: "Elegido como uno de los Best Gamers 2022 por Forbes, TheGrefg empezó creando contenido en YouTube y ahora también triunfa en Twitch. Es copropietario de uno de los clubes más seguidos del mundo, Team Heretics, y está nominado junto a Ibai Llanos a Streamer del año 2022."
            },
            {
              
              nombre: "SAMUEL DE LUQUE",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Samuel-de-Luque-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@VEGETA777"
                },
                {
                  youtube: "@VEGETA777"
                },
                {
                  twitter: "@VEGETA777"
                },
                {
                  tiktok: "@VEGETA777"
                }
              ],
              descripcion: "Este madrileño, conocido como Vegetta777, es uno de los jugadores más veteranos e influyentes en España y Latinoamérica. Desde 2008, sus gameplays (en particular con Minecraft) le han llevado a conseguir más de 33 millones de suscriptores en su canal."
            },
            {
              
              nombre: "RUBÉN DOBLAS",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Ruben-Doblas-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@elrubiusOMG"
                },
                {
                  youtube: "@elrubiusOMG"
                },
                {
                  twitter: "@elrubiusOMG"
                },
                {
                  tiktok: "@elrubiusOMG"
                }
              ],
              descripcion: "El Rubius supera los 40 millones en su canal principal y sigue encabezando la lista de los youtubers con más suscriptores. Considerado por esta revista como uno de los Best Gamers 2022, en julio estrenó su primer documental, Rubius X, donde habla de cómo ha sido su camino al éxito."
            },
            {
              
              nombre: "RAÚL ÁLVAREZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Raul-Alvarez-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@auronplay"
                },
                {
                  youtube: "@auronplay"
                },
                {
                  twitter: "@auronplay"
                },
                {
                  tiktok: "@auronplay"
                }
              ],
              descripcion: "“¿Todo bien? ¿Todo correcto? Y yo que me alegro». Con esa frase arrasó en YouTube, la plataforma que le dio la fama y donde mantiene casi 30 millones de seguidores. Ahora se ha pasado al streaming de Twitch, ahí continúa comentando vídeos, haciendo bromas telefónicas y gaming."
            },
            {
              
              nombre: "IBAI LLANOS",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Ibai-Llanos-400x400.jpg",
              categoria: "Entretenimiento",
              rrss: [
                {
                  instagram: "@ibaillanos"
                },
                {
                  youtube: "@ibaillanos"
                },
                {
                  twitter: "@ibaillanos"
                },
                {
                  tiktok: "@ibaillanos"
                }
              ],
              descripcion: "El streamer vasco no ha parado de acaparar titulares y hacer crecer su canal de Twitch, donde batió el récord de espectadores simultáneos: 3,3 millones durante La velada del año 2. Además, el elegido como Streamer del año 2020 y 2021 se postula favorito para el galardón 2022."
            }
          ]
        },
        
        {
          href: "fashion",
          titulo: "Fashion",
          datos: [
            {
              
              
              nombre: "MARTA SIERRA",
              imagen: "assets/influencers/marta-siera.jpg",
              grande: true,
              categoria: "Fashion",
              rrss: [
                {
                  instagram: "@marta__sierra"
                },
                {
                  youtube: "@marta__sierra"
                },
                {
                  twitter: "@marta__sierra"
                },
                {
                  tiktok: "@marta__sierra"
                }
              ],
              descripcion: "No todo el mundo puede presumir de haber sido la primera creadora de contenido en aparecer en la web de Zara. Marta Sierra sí. La influencer, conocida por sus looks con atrevidos colores, estampados y por sus vídeos cargados de transiciones milimétricas fue la protagonista de una de las nuevas líneas de accesorios que la marca más emblemática de Inditex presentó este año. Éste no ha sido su único éxito en 2022, ya que en marzo se alzó con el galardón Best fashion creator en los Premios Ídolo. Y es que, a sus 27 años, la barcelonesa acumula más de un millón de seguidores y su particular estilo la hace irresistible para las marcas."
            },
            {
              
              nombre: "NACHO YANES",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Nacho-Yanes-400x400.jpg",
              categoria: "Fashion",
              rrss: [
                {
                  instagram: "@nachoyanes"
                },
                {
                  youtube: "@nachoyanes"
                },
                {
                  twitter: "@nachoyanes"
                },
                {
                  tiktok: "@nachoyanes"
                }
              ],
              descripcion: "Consultor en la compañía internacional EY, graduado en Ciencias Empresariales y ADE. El polifacético Yanes compagina su faceta empresarial con el mundo de la moda. Su elegancia y su estilo sobrio a la vez que deportivo lo hacen brillar en las redes."
            },
            {
              
              nombre: "GALA GONZÁLEZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Gala-Gonzalez-400x400.jpg",
              categoria: "Fashion",
              rrss: [
                {
                  instagram: "@galagonzalez"
                },
                {
                  youtube: "@galagonzalez"
                },
                {
                  twitter: "@galagonzalez"
                },
                {
                  tiktok: "@galagonzalez"
                }
              ],
              descripcion: "Nacida en La Coruña, es una de las primeras blogueras españolas, cuenta con más de 15 años de experiencia en el sector de la moda y es sobrina del diseñador Adolfo Domínguez. Además, creativa y emprendedora, creó Amlul, su propia firma de ropa sostenible y hecha en España."
            },
            {
              
              nombre: "ROCÍO OSORNO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Rocio-Osorno-400x400.jpg",
              categoria: "Fashion",
              rrss: [
                {
                  instagram: "@rocioOsorno"
                },
                {
                  youtube: "@rocioOsorno"
                },
                {
                  twitter: "@rocioOsorno"
                },
                {
                  tiktok: "@rocioOsorno"
                }
              ],
              descripcion: "Graduada en ingeniería técnica agrícola, dio un vuelco a su vida y decidió estudiar patronaje. El resultado fue la creación de su propia firma de moda. Ahora, la influencer sevillana, recién instalada en Madrid, inspira con sus diseños y sus looks diarios a millón y medio de seguidores."
            },
            {
              
              nombre: "ALEX RIVIÈRE",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Alex-Riviere-1-400x400.jpg",
              categoria: "Fashion",
              rrss: [
                {
                  instagram: "@ariviere"
                },
                {
                  youtube: "@ariviere"
                },
                {
                  twitter: "@ariviere"
                },
                {
                  tiktok: "@ariviere"
                }
              ],
              descripcion: "Esta catalana de padre francés no solo es estilista y diseñadora, sino que también es influencer y cuenta con un millón de seguidores en Instagram. Su estilo y su pasión por la moda la han llevado a crear su propia firma y a trabajar como embajadora de famosas marcas como Dior."
            },
            {
              
              nombre: "MARTA LOZANO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Marta-Lozano-400x400.jpg",
              categoria: "Fashion",
              rrss: [
                {
                  instagram: "@martalozanop"
                },
                {
                  youtube: "@martalozanop"
                },
                {
                  twitter: "@martalozanop"
                },
                {
                  tiktok: "@martalozanop"
                }
              ],
              descripcion: "Compagina a la perfección su trayectoria como modelo y su trabajo en las redes. La influencer, que ha protagonizado una de las bodas del año, sigue haciendo crecer su propia marca de cosmética, Glowfilter, y acude a todas las grandes citas internacionales del mundo de la moda."
            },
            {
              
              nombre: "PELAYO DÍAZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Pelayo-Diaz-400x400.jpg",
              categoria: "Fashion",
              rrss: [
                {
                  instagram: "@pelayodiaz"
                },
                {
                  youtube: "@pelayodiaz"
                },
                {
                  twitter: "@pelayodiaz"
                },
                {
                  tiktok: "@pelayodiaz"
                }
              ],
              descripcion: "Uno de los pioneros, Pelayo creó su blog, Katelovesme, en 2007. Su asentada carrera como estilista y como personaje televisivo lo hicieron saltar a la fama. Años después, el asturiano sigue compartiendo con sus seguidores una vida vinculada a las pasarelas y a las marcas de lujo."
            },
            {
              
              nombre: "NICOLÁS SCAVO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Magno-Scavo-400x400.jpg",
              categoria: "Fashion",
              rrss: [
                {
                  instagram: "@magno_scavo"
                },
                {
                  youtube: "@magno_scavo"
                },
                {
                  twitter: "@magno_scavo"
                },
                {
                  tiktok: "@magno_scavo"
                }
              ],
              descripcion: "Este venezolano afincado en España, Nicolás Scavo, conocido en redes como Magno Scavo, comenzó a trabajar como albañil y ha acabado conquistando a casi nueve millones de seguidores en TikTok, convirtiéndose así en una de las caras masculinas más conocidas en el sector de la moda."
            },
           
          ]
        },
        {
          href: "food",
          titulo: "Food",
          datos: [
            {
              nombre: "CAROLINA FERRER",
              imagen: "assets/influencers/carolina-ferrer.jpg",
              grande : true,
              categoria: "Food",
              rrss: [
                {
                  instagram: "@carolina_ferrer_"
                },
                {
                  youtube: "@carolina_ferrer_"
                },
                {
                  twitter: "@carolina_ferrer_"
                },
                {
                  tiktok: "@carolina_ferrer_"
                }
              ],
              descripcion: "Carolina es estilista y fotógrafa de cocina, “por pasión y profesión”. Sus recetas y su gusto por la imagen y la estética de sus platos la han llevado a convertirse en influencer gastronómica, aunque en su cuenta también comparte momentos de su vida, sus viajes y su maternidad."
            },
            {
              
              nombre: "ELÍAS DOSONMU",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Elias-Dosunmu-400x400.jpg",
              categoria: "Food",
              rrss: [
                {
                  instagram: "@eliasdosunmu"
                },
                {
                  youtube: "@eliasdosunmu"
                },
                {
                  twitter: "@eliasdosunmu"
                },
                {
                  tiktok: "@eliasdosunmu"
                }
              ],
              descripcion: "La cuenta de TikTok de Elias Dosunmu ya tiene enganchados a casi 5 millones de seguidores. La naturalidad de sus reseñas y el talento del joven chef para convertir cualquier plato en una auténtica experiencia culinaria ha hecho que su fama en redes sociales crezca como la espuma."
            },
            {
              
              nombre: "MERY GARCÍA BUTRÓN",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Mery-Garcia-Butron-400x400.jpg",
              categoria: "Food",
              rrss: [
                {
                  instagram: "@cocinaparatodos"
                },
                {
                  youtube: "@cocinaparatodos"
                },
                {
                  twitter: "@cocinaparatodos"
                },
                {
                  tiktok: "@cocinaparatodos"
                }
              ],
              descripcion: "De los platos más simples a los más profesionales. La gaditana Mery García quería demostrar al mundo que la cocina es para todos, y así lo hizo, convirtiéndose en influencer gastronómica y congregando a casi 3,5 millones de suscriptores que siguen día a día todas sus recetas en Youtube."
            },
            {
              
              nombre: "RAFA ANTONÍN",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Rafuel-400x400.jpg",
              categoria: "Food",
              rrss: [
                {
                  instagram: "@rafuel55"
                },
                {
                  youtube: "@rafuel55"
                },
                {
                  twitter: "@rafuel55"
                },
                {
                  tiktok: "@rafuel55"
                }
              ],
              descripcion: "Rafa Antonín, mejor conocido por su más de medio millón de seguidores como Rafuel, llegó a Instagram en 2012 impulsado por su hija. A sus 65 años el barcelonés ha conseguido hacerse hueco en las redes publicando recetas sencillas de treinta segundos con un toque vanguardista"
            },
            {
              
              nombre: "ROBERTO BOSQUET",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/chef-Bosquet-400x400.jpg",
              categoria: "Food",
              rrss: [
                {
                  instagram: "@chefbosquet"
                },
                {
                  youtube: "@chefbosquet"
                },
                {
                  twitter: "@chefbosquet"
                },
                {
                  tiktok: "@chefbosquet"
                }
              ],
              descripcion: "Bombero y triatleta, Roberto Bosquet (1985) ha sabido dar rienda suelta a su pasión por la cocina en redes sociales. Su éxito en Instagram y su paso por programas como MasterChef lo han llevado a publicar tres libros, montar su propio restaurante y crear una nueva marca de bebidas."
            }
          ]
        },
        {
          href: "travel",
          titulo: "Travel",
          datos: [
            {
              
              
              nombre: "GOTZON MANTULIN",
              imagen: "assets/influencers/gotzon.jpg",
              grande: true,
              categoria: "Travel",
              rrss: [
                {
                  instagram: "@gotzonmantuliz"
                },
                {
                  youtube: "@gotzonmantuliz"
                },
                {
                  twitter: "@gotzonmantuliz"
                },
                {
                  tiktok: "@gotzonmantuliz"
                }
              ],
              descripcion: "Con un gran amor por la naturaleza y buenas fotografías comparte lugares increíbles a donde viaja siempre que puede con su perra Noa, la gran protagonista. Se hizo popular al ganar un famoso reality vasco y ahora es el<em>storyteller</em>de National Geographic España para su 25 aniversario."
            },
            {
              
              nombre: "ENRIQUE ALEX",
              imagen: "assets/influencers/enrique-alex.jpg",
              categoria: "Travel",
              rrss: [
                {
                  instagram: "@enriquealex"
                },
                {
                  youtube: "@enriquealex"
                },
                {
                  twitter: "@enriquealex"
                },
                {
                  tiktok: "@enriquealex"
                }
              ],
              descripcion: "En 2016 y tras siete años trabajando sin descanso en su propia agencia de diseño decidió que no podía más. Cogió la mochila y compró un billete a Japón sin fecha de vuelta. Ese día se lanzó a compartir su aventura en un canal de Youtube y ahí empezó su vuelta al mundo. En dos años y medio visitó una treintena de países y ahora ha convertido lo de viajar en su profesión. Colabora con todo tipo de marcas y se proclama viajero responsable y activista por la crisis climática y los derechos LGBT+. Ha ganado el Premio IATI 2022 a mejor canal de YouTube de viajes y tiene a sus seguidores enganchados a la reforma de su nueva casa."
            },
            
            {
              
              nombre: "ALAN X EL MUNDO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Alan-x-el-mundo-2-1-400x400.jpg",
              categoria: "Travel",
              rrss: [
                {
                  instagram: "@alanxelmundo"
                },
                {
                  youtube: "@alanxelmundo"
                },
                {
                  twitter: "@alanxelmundo"
                },
                {
                  tiktok: "@alanxelmundo"
                }
              ],
              descripcion: "Convirtió lo que era un hobby en su trabajo y ya lleva más de 12 años compartiendo sus viajes en YouTube. Este actor mexicano ha estrenado este año un nuevo musical, esta vez siendo él dramaturgo. En internet basa su contenido en vlogs, historia, datos curiosos y consejos para viajar."
            },
            {
              
              nombre: "IZHAN",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Izhan-400x400.jpg",
              categoria: "Travel",
              rrss: [
                {
                  instagram: "@izhan"
                },
                {
                  youtube: "@izhan"
                },
                {
                  twitter: "@izhan"
                },
                {
                  tiktok: "@izhan"
                }
              ],
              descripcion: "Izhan (1992) graba sus periplos y recorre el mundo, dando a sus vídeos siempre toques originales. Además, comparte reflexiones de lo más diversas y parte de sus rodajes como director creativo. También sorprende: su última aventura extrema aguantando en apnea durante cuatro minutos."
            },
            {
              
              nombre: "MIKEL BOISSET",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Mikel-Boisset-400x400.jpg",
              categoria: "Travel",
              rrss: [
                {
                  instagram: "@mikelboisset"
                },
                {
                  youtube: "@mikelboisset"
                },
                {
                  twitter: "@mikelboisset"
                },
                {
                  tiktok: "@mikelboisset"
                }
              ],
              descripcion: "Con casi un millón de seguidores en TikTok, muestra las aventuras de un amante del deporte, los viajes y la naturaleza en sus días de surf, además de rutas y acampadas en lugares increíbles. En YouTube comparte canal (Boisset Brothers) con su hermano Alex, ampliando la narrativa de sus viajes juntos."
            },
            {
              
              nombre: "PAULA DÍEZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Paula-Diez-400x400.jpg",
              categoria: "Travel",
              rrss: [
                {
                  instagram: "@pauladiezc"
                },
                {
                  youtube: "@pauladiezc"
                },
                {
                  twitter: "@pauladiezc"
                },
                {
                  tiktok: "@pauladiezc"
                }
              ],
              descripcion: "Su Instagram está repleto de colores vivos. Atardeceres, flores, montaña y mucho mar son una muestra de lo que ofrece esta amante de la naturaleza y del surf, deporte que practica desde los 10 años. Comparte viajes increíbles mientras trabaja con marcas como Quicksilver o Levis."
            }
          ]
        },
        {
          href: "motor",
          titulo: "Motor",
          datos: [
            {
              
              nombre: "DANI CLOS",
              imagen: "assets/influencers/dani-clos.jpg",
              grande : true,
              categoria: "Motor",
              rrss: [
                {
                  instagram: "@daniclos"
                },
                {
                  youtube: "@daniclos"
                },
                {
                  twitter: "@daniclos"
                },
                {
                  tiktok: "@daniclos"
                }
              ],
              descripcion: "Este catalán llegó a ser piloto de pruebas de la escudería HRT Formula 1 Team. En YouTube comparte vídeos probando y comentando los coches más espectaculares. Domina Instagram, donde supera los 400.000 y también se inicia en TikTok combinando el motor con el humor y la familia."
            },
            {
              
              nombre: "MAJES EN MOTO",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Majes-400x400.jpg",
              categoria: "Motor",
              rrss: [
                {
                  instagram: "@majesenmoto"
                },
                {
                  youtube: "@majesenmoto"
                },
                {
                  twitter: "@majesenmoto"
                },
                {
                  tiktok: "@majesenmoto"
                }
              ],
              descripcion: "Nadie sabe quién se esconde tras el casco y las gafas de sol de esta cuenta, y quizás esa sea una de las riquezas de este personaje. Su creador lleva desde 2015 enganchando al público con sus vlogs en moto en los que cuenta con un toque de humor sus aventuras sobre las dos ruedas."
            },
           
            {
              
              nombre: "VICESAT",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/vicesat-400x400.jpg",
              categoria: "Motor",
              rrss: [
                {
                  instagram: "@vicesat"
                },
                {
                  youtube: "@vicesat"
                },
                {
                  twitter: "@vicesat"
                },
                {
                  tiktok: "@vicesat"
                }
              ],
              descripcion: "Con tres millones en YouTube, puede presumir de ser el rey del motor en redes. Poco o nada se sabe de él, ni su nombre ni su cara, pero desde luego no le hace falta para transmitir. Comparte trucos o<em>reviews</em>, acumulando en algunos casi 10 millones de visitas."
            }
          ]
        },
        {
          href: "positive",
          titulo: "Positive Change",
          datos: [
            {
              
              
              nombre: "MELO MORENO",
              imagen: "assets/influencers/melo-moreno.jpg",
              grande: true,
              categoria: "Positive Change",
              descripcion : 'Es una de las veteranas de YouTube donde ha tenido un amplio recorrido a lo largo de los años, siempre reinventándose. Cantante, gamer o vlogger han sido algunas de sus facetas más destacadas cuando era conocida como Yellow Mellow. Este año ha arrasado con el estreno de su propio podcast, El melocotonero, un espacio de debate libre de prejuicios en el que trata diversos temas con invitados, la mayoría, compañeros de profesión. Recientemente, se ha confesado no binaria y sometido a una mastectomía que ha documentado a través de sus plataformas para el colectivo tras no haber encontrado referentes no trans en su proceso.',
              rrss: [
                {
                  instagram: "@melo"
                },
                {
                  youtube: "@melo"
                },
                {
                  twitter: "@melo"
                },
                {
                  tiktok: "@melo"
                }
              ]
            }
          ]
        },
        {
          href: "next",
          titulo: "Next Gen",
          datos: [
            {
              
              nombre: "LOLA MORENO",
              imagen: "assets/influencers/lola-moreno.jpg",
              grande : true,
              categoria: "Next Gen",
              rrss: [
                {
                  instagram: "@lolalolita"
                },
                {
                  youtube: "@lolalolita"
                },
                {
                  twitter: "@lolalolita"
                },
                {
                  tiktok: "@lolalolita"
                }
              ],
              descripcion: "Tiene 20 años y ya goza de un amplio recorrido en las redes sociales, cuenta con cuatro libros en el mercado y una marca de joyas propia. Empezó en Musicaly.ly y ahora crea contenido para YouTube, Instagram y TikTok, siendo esta última en la que más seguidores acumula, 9,4 millones."
            },{
              
              nombre: "JUSTBOGGI",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Justboggi-400x400.jpg",
              categoria: "Next Gen",
              rrss: [
                {
                  instagram: "@justboggi"
                },
                {
                  youtube: "@justboggi"
                },
                {
                  twitter: "@justboggi"
                },
                {
                  tiktok: "@justboggi"
                }
              ],
              descripcion: "Nació en Rusia, pero Bogdan Gnatovich se maneja magistralmente en español. Sus bailes, estilismos y su encantadora sonrisa han convertido a este joven en un ídolo de masas y en una estrella de la plataforma Tiktok, tanto es así que en 2020 entró a formar parte del popular Team Ken."
            },
            {
              
              nombre: "MAR LUCAS",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Mar-Lucas-400x400.jpg",
              categoria: "Next Gen",
              rrss: [
                {
                  instagram: "@marlucas18"
                },
                {
                  youtube: "@marlucas18"
                },
                {
                  twitter: "@marlucas18"
                },
                {
                  tiktok: "@marlucas18"
                }
              ],
              descripcion: "Asiste a las mejores alfombras rojas y colabora con Lancôme o Armani Beauty. Con 20 años y natural de Sitges arrasa con bailes,<em>trends</em>, tutoriales y retos. Es una de las caras del momento, en Instagram, tiene casi 2 millones de seguidores y crea conciencia a través de su vegetarianismo."
            },
            {
              
              nombre: "ÁNGELA MÁRMOL",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Angela-Marmol-400x400.jpg",
              categoria: "Next Gen",
              rrss: [
                {
                  instagram: "@amarmolmc"
                },
                {
                  youtube: "@amarmolmc"
                },
                {
                  twitter: "@amarmolmc"
                },
                {
                  tiktok: "@amarmolmc"
                }
              ],
              descripcion: "Ángela se ha convertido en un referente en la lucha contra el bullying tras contar su experiencia con los<em>haters</em>en redes. Así lo ha transmitido en sus dos libros, donde muestra el lado más oscuro de Internet. Además de eso, publica su día a día, bailes, viajes y retos con amigos."
            },
            
            {
              
              nombre: "SAMUEL LÓPEZ",
              imagen: "https://forbes.es/wp-content/uploads/2022/09/Samuel-Lopez-400x400.jpg",
              categoria: "Next Gen",
              rrss: [
                {
                  instagram: "@samuellopez_"
                },
                {
                  youtube: "@samuellopez_"
                },
                {
                  twitter: "@samuellopez_"
                },
                {
                  tiktok: "@samuellopez_"
                }
              ],
              descripcion: "Una cosa es hacerse viral en TikTok y otra mantenerse arriba, bien lo sabe Samuel López (Benetúser, 1998), que celebró recientemente los 20 millones de seguidores en la red social del momento. Allí el modelo se ha coronado como un gran bailarín, dominando todo tipo de estilos."
            }
          ]
        }
    ]
    public sticky : ISticky[] = [
      { titulo : 'creativity'       , enlace : '#creativity'},
      // { titulo : 'business'         , enlace : '#business'},
      { titulo : 'tecnología'       , enlace : '#tecnologia'},
      { titulo : 'entretenimiento'  , enlace : '#entretenimiento'},
      { titulo : 'lifestyle'        , enlace : '#lifestyle'},
      { titulo : 'fashion'          , enlace : '#fashion'},
      { titulo : 'food'             , enlace : '#food'},
      { titulo : 'travel'           , enlace : '#travel'},
      { titulo : 'motor'            , enlace : '#motor'},
      { titulo : 'positive change'  , enlace : '#positive'},
      { titulo : 'next gen'         , enlace : '#next'},
    ]
    constructor(){}
}
