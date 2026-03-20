const datosPsicos = {
    "sinonimos": {
        "n": "SINÓNIMOS",
        "tests": [
            {
                "titulo": "Test n°1 - Sinónimos",
                "preguntas": [
                    { "q": "APOYO", "ops": ["Obstáculo", "Ayuda", "Pérdida", "Duda"], "c": 1 },
                    { "q": "AMORTIZAR", "ops": ["Contraer", "Saldar", "Incrementar", "Aumentar"], "c": 1 },
                    { "q": "LENITIVO", "ops": ["Distinto", "Calmante", "Irritante", "Común"], "c": 1 },
                    { "q": "DEPRAVAR", "ops": ["Corregir", "Moralizar", "Corromper", "Redimir"], "c": 2 },
                    { "q": "VITUPERIO", "ops": ["Crítica", "Canal", "Límite", "Tapiz"], "c": 0 },
                    { "q": "AMOSCARSE", "ops": ["Agazaparse", "Aplaudir", "Reírse", "Enfadarse"], "c": 3 },
                    { "q": "PERICIA", "ops": ["Curiosidad", "Experiencia", "Torpeza", "Desden"], "c": 1 },
                    { "q": "AMNISTIAR", "ops": ["Perdonar", "Juzgar", "Gritar", "Castigar"], "c": 0 },
                    { "q": "AMORAL", "ops": ["Ético", "Sin moral", "Correcto", "Legal"], "c": 1 },
                    { "q": "AGLUTINACIÓN", "ops": ["Fractura", "Dispersión", "Unión", "Separación"], "c": 2 },
                    { "q": "FOGUEADO", "ops": ["Experimentado", "Novato", "Inexperto", "Quemado"], "c": 0 },
                    { "q": "ENIGMÁTICO", "ops": ["Claro", "Misterioso", "Aséptico", "Tibio"], "c": 1 },
                    { "q": "ZOTE", "ops": ["Pesado", "Estrecho", "Tonto", "Listo"], "c": 2 },
                    { "q": "ANTINOMIA", "ops": ["Norma", "Angioma", "Verruga", "Contradicción"], "c": 3 },
                    { "q": "AMPARADOR", "ops": ["Saboteador", "Prestamista", "Iluminar", "Protector"], "c": 3 }
                ]
            },
            {
                "titulo": "Test n°2 - Sinónimos",
                "preguntas": [
                    { "q": "EXIMIO", "ops": ["Ilustre", "Mediocre", "Bastardo", "Apagado"], "c": 0 },
                    { "q": "ABOCHORNADO", "ops": ["Humillado", "Radiante", "Avergonzado", "Orgulloso"], "c": 2 },
                    { "q": "APÓSTATA", "ops": ["Creyente", "Fiel", "Hereje", "Devoto"], "c": 2 },
                    { "q": "LOZANO", "ops": ["Remoto", "Bélico", "Vigoroso", "Marchito"], "c": 2 },
                    { "q": "ENVERGADURA", "ops": ["Dimensión", "Arrebato", "Fondo", "Lastre"], "c": 0 },
                    { "q": "PRESTANCIA", "ops": ["Oscuridad", "Apatía", "Garbo", "Desorden"], "c": 2 },
                    { "q": "CICLÓPEO", "ops": ["Veloz", "Suave", "Colosal", "Templado"], "c": 2 },
                    { "q": "COLUSIÓN", "ops": ["Choque", "Confabulación", "Derrotero", "Brisa"], "c": 1 },
                    { "q": "PARSIMONIA", "ops": ["Elusión", "Furia", "Calma", "Plomo"], "c": 2 },
                    { "q": "BOSQUEJADO", "ops": ["Esbozado", "Preciso", "Concreto", "Definido"], "c": 0 },
                    { "q": "DEFERENTE", "ops": ["Respetuoso", "Imprudente", "Irrespetuoso", "Indiferente"], "c": 0 },
                    { "q": "APROVISIONAMIENTO", "ops": ["Escasez", "Desabastecimiento", "Suministro", "Déficit"], "c": 2 },
                    { "q": "DÁDIVA", "ops": ["Lamento", "Donativo", "Obstrucción", "Reparación"], "c": 1 },
                    { "q": "AFABILIDAD", "ops": ["Hostilidad", "Amabilidad", "Travesía", "Cortinaje"], "c": 1 },
                    { "q": "NESCIENTE", "ops": ["Ignorante", "Amistoso", "Delicado", "Natural"], "c": 0 }
                ]
            },
            {
                "titulo": "Test n°3 - Sinónimos",
                "preguntas": [
                    { "q": "CATARSIS", "ops": ["Limpieza", "Exabrupto", "Colapso", "Corte"], "c": 0 },
                    { "q": "FUERO", "ops": ["Reglamento", "Desorden", "Torreón", "Lucha"], "c": 0 },
                    { "q": "ZORRO", "ops": ["Largo", "Frágil", "Lento", "Astuto"], "c": 3 },
                    { "q": "INAPELABLE", "ops": ["Consultivo", "Irrevocable", "Pluvial", "Engañoso"], "c": 1 },
                    { "q": "MÁCULA", "ops": ["Mariche", "Limpieza", "Despeje", "Claridad"], "c": 1 },
                    { "q": "ASEVERACIÓN", "ops": ["Penumbra", "Ficción", "Duda", "Afirmación"], "c": 3 },
                    { "q": "APOSTROFE", "ops": ["Exclamación", "Insulto", "Paréntesis", "Coma"], "c": 1 },
                    { "q": "INFUNDADO", "ops": ["Aglomerado", "Injustificado", "Destinado", "Agrícola"], "c": 1 },
                    { "q": "AGNOSTICISMO", "ops": ["Religiosidad", "Fanatismo", "Dogmatismo", "Escepticismo"], "c": 3 },
                    { "q": "FÚLGIDO", "ops": ["Marchito", "Frigido", "Brillante", "Fútil"], "c": 2 },
                    { "q": "PECULIO", "ops": ["Monje", "Hacienda", "Cobijo", "Disputa"], "c": 1 },
                    { "q": "MAZARÍ", "ops": ["Baldosa", "Barco Árabe", "Mazorca", "Manco"], "c": 0 },
                    { "q": "HIRSUTO", "ops": ["Liso", "Suave", "Peludo", "Crespo"], "c": 2 },
                    { "q": "SEÑERO", "ops": ["Rutinario", "Singular", "Oculto", "Impuro"], "c": 1 },
                    { "q": "ÁBACO", "ops": ["Numerador", "Libro religioso", "Remate", "Tipo de árbol"], "c": 0 }
                ]
            },
            {
                "titulo": "Test n°4 - Sinónimos",
                "preguntas": [
                    { "q": "INFAMANTE", "ops": ["Pulido", "Afrentoso", "Circular", "Troquelado"], "c": 1 },
                    { "q": "AMPO", "ops": ["Blancura", "Verruga", "Elemento religioso", "Libre"], "c": 0 },
                    { "q": "CONJETURA", "ops": ["Verdad", "Afirmación", "Suposición", "Contradicción"], "c": 2 },
                    { "q": "ABSOLUCIÓN", "ops": ["Furia", "Perdón", "Derrota", "Miedo"], "c": 1 },
                    { "q": "MACILENTO", "ops": ["Fuerte", "Palida", "Jovial", "Activo"], "c": 1 },
                    { "q": "NEFANDO", "ops": ["Equitativo", "Abominable", "Iluminado", "Sobrio"], "c": 1 },
                    { "q": "AMOJAMADO", "ops": ["Compactado", "Grueso", "Frágil", "Ligero"], "c": 0 },
                    { "q": "TÓRRIDO", "ops": ["Abrasador", "Húmedo", "Frío", "Glacial"], "c": 0 },
                    { "q": "PERTINAZ", "ops": ["Flexible", "Obstinado", "Rígido", "Despejado"], "c": 1 },
                    { "q": "ABJURACIÓN", "ops": ["Juramento", "Renuncia", "Devoción", "Aceptación"], "c": 1 },
                    { "q": "ZÁNGANO", "ops": ["Holgazán", "Trabajador", "Laborioso", "Diligente"], "c": 0 },
                    { "q": "LUCUBRAR", "ops": ["Recordar", "Olvidar", "Ignorar", "Reflexionar"], "c": 3 },
                    { "q": "CLÉRIGO", "ops": ["Jinete", "Orador", "Sacerdote", "Papiro"], "c": 2 },
                    { "q": "LABRIEGO", "ops": ["Banquero", "Campesino", "Asesino", "Ladrón"], "c": 1 },
                    { "q": "AMOROSO", "ops": ["Rudo", "Tosco", "Cariñoso", "Frío"], "c": 2 }
                ]
            },
            {
                "titulo": "Test n°5 - Sinónimos",
                "preguntas": [
                    { "q": "LAMPIÑO", "ops": ["Barbudo", "Peludo", "Imberbe", "Bigotudo"], "c": 2 },
                    { "q": "ABARRAGANARSE", "ops": ["Separarse", "Enemistarse", "Amancebarse", "Desentenderse"], "c": 2 },
                    { "q": "ASCETICO", "ops": ["Anacoreta", "Lúdico", "Rimbombante", "Lateral"], "c": 0 },
                    { "q": "INCORRUPTIBLE", "ops": ["Perforado", "Integro", "Maleable", "Etéreo"], "c": 1 },
                    { "q": "ONÍRICO", "ops": ["Ave", "Visual", "Soñado", "Irónico"], "c": 2 },
                    { "q": "CONSUETUDINARIO", "ops": ["Capitular", "Habitual", "Cortés", "Desconsolado"], "c": 1 },
                    { "q": "ARBITRARIO", "ops": ["Objetivo", "Único", "Parcial", "Ordenado"], "c": 2 },
                    { "q": "AMBAGES", "ops": ["Rodeos", "Claridad", "Brocado", "Sonrisa"], "c": 0 },
                    { "q": "QUIMERA", "ops": ["Realidad", "Ilusión", "Firmeza", "Claridad"], "c": 1 },
                    { "q": "ENTELEQUIA", "ops": ["Utopia", "Desván", "Cilindro", "Ironía"], "c": 0 },
                    { "q": "ALFEIZAR", "ops": ["Reja", "Mezquita", "Umbral", "Derrame"], "c": 2 },
                    { "q": "AMEDRENTAR", "ops": ["Elogiar", "Relajar", "Animar", "Intimidar"], "c": 3 },
                    { "q": "ABARRANCAR", "ops": ["Subir", "Sostener", "Encallar", "Ayudar"], "c": 2 },
                    { "q": "MENTECATO", "ops": ["Razonable", "Imbécil", "Coherente", "Agudo"], "c": 1 },
                    { "q": "JURISPRUDENTE", "ops": ["Legalista", "Necio", "Arisco", "Ilusorio"], "c": 0 }
                ]
            },
            {
                "titulo": "Test n°6 - Sinónimos",
                "preguntas": [
                    { "q": "INHUMAR", "ops": ["Sepultar", "Enterrar", "Airear", "Conservar"], "c": 0 },
                    { "q": "MENESTEROSO", "ops": ["Necesitado", "Rico", "Tolerante", "Acomodado"], "c": 0 },
                    { "q": "IMPIO", "ops": ["Devoto", "Hereje", "Sagrado", "Cruel"], "c": 1 },
                    { "q": "INTANGIBLE", "ops": ["Sumiso", "Etéreo", "Lumínico", "Frondoso"], "c": 1 },
                    { "q": "OBSOLETO", "ops": ["Anticuado", "Horizontal", "Compuesto", "Lateral"], "c": 0 },
                    { "q": "ADUSTO", "ops": ["Triste", "Risueño", "Serio", "Veloz"], "c": 2 },
                    { "q": "ENDEBLE", "ops": ["Fuerte", "Inestable", "Fragmentado", "Tenaz"], "c": 1 },
                    { "q": "PROEMIO", "ops": ["Cierre", "Epílogo", "Preámbulo", "Recorte"], "c": 2 },
                    { "q": "BURLESCO", "ops": ["Añejo", "Torrido", "Lúcido", "Irónico"], "c": 3 },
                    { "q": "JERARQUIA", "ops": ["Travesía", "Orden", "Afluente", "Fusión"], "c": 1 },
                    { "q": "LISONJA", "ops": ["Halago", "Garra", "Cónclave", "Audacia"], "c": 0 },
                    { "q": "SIBARITA", "ops": ["Refinado", "Tosco", "Silencioso", "Vulgar"], "c": 0 },
                    { "q": "MALVERSACIÓN", "ops": ["Contemplación", "Fraude", "Reposición", "Reparación"], "c": 1 },
                    { "q": "FRAGOROSO", "ops": ["Grácil", "Sombrío", "Ruidoso", "Integro"], "c": 2 },
                    { "q": "ABARRAJAR", "ops": ["Construir", "Elevar", "Reparar", "Derribar"], "c": 3 }
                ]
            },
            {
                "titulo": "Test n°7 - Sinónimos",
                "preguntas": [
                    { "q": "AMOTINAMIENTO", "ops": ["Descanso", "Celda", "Moderación", "Rebelión"], "c": 3 },
                    { "q": "BALUARTE", "ops": ["Inercia", "Bastión", "Hedonista", "Cosechadora"], "c": 1 },
                    { "q": "ABACÁ", "ops": ["Amapola", "Adormidera", "Tienda", "Cáñamo"], "c": 3 },
                    { "q": "INTRINSECO", "ops": ["Ligero", "Esencial", "Estirado", "Musical"], "c": 1 },
                    { "q": "ABNEGACIÓN", "ops": ["Renuncia", "Prohibición", "Sacrificio", "Absoluto"], "c": 2 },
                    { "q": "DOLMEN", "ops": ["Puente", "Monolito", "Atalaya", "Mástil"], "c": 1 },
                    { "q": "APOCOPE", "ops": ["Ampliación", "Supresión final", "Prefijo", "Sufijo"], "c": 1 },
                    { "q": "ANEJAR", "ops": ["Insultar", "Marinero", "Unir", "Pimpollo"], "c": 2 },
                    { "q": "PONDERAR", "ops": ["Hundir", "Omitir", "Valorar", "Improvisar"], "c": 2 },
                    { "q": "VAPULEAR", "ops": ["Organizar", "Celebrar", "Simular", "Golpear"], "c": 3 },
                    { "q": "FRAGOR", "ops": ["Silencio", "Calma", "Estrépito", "Quietud"], "c": 2 },
                    { "q": "ASERCIÓN", "ops": ["Negación", "Hipótesis", "Afirmación", "Conjetura"], "c": 2 },
                    { "q": "ALJARAFE", "ops": ["Volcán", "Terraza", "Pantano", "Llanura"], "c": 1 },
                    { "q": "CASACIÓN", "ops": ["Anulación", "Juramento", "Propuesta", "Convocatoria"], "c": 0 },
                    { "q": "RETICENTE", "ops": ["Reservado", "Transparente", "Obvio", "Ligero"], "c": 0 }
                ]
            },
            {
                "titulo": "Test n°8 - Sinónimos",
                "preguntas": [
                    { "q": "INSIDIOSO", "ops": ["Engañoso", "Basto", "Sincero", "Absurdo"], "c": 0 },
                    { "q": "AMORTIGUAR", "ops": ["Exagerar", "Reflejar", "Aumentar", "Atenuar"], "c": 3 },
                    { "q": "AGABACHADO", "ops": ["Inclinado", "Temeroso", "Encogido", "Respetuoso"], "c": 2 },
                    { "q": "UBÉRRIMO", "ops": ["Infimo", "Fértil", "Marchito", "Infértil"], "c": 1 },
                    { "q": "FERAZ", "ops": ["Curvo", "Estéril", "Fértil", "Huraño"], "c": 2 },
                    { "q": "AMONDONGADO", "ops": ["Suelto", "Relleno", "Puro", "Grueso"], "c": 3 },
                    { "q": "AMOLLENTAR", "ops": ["Doblar", "Enfriar", "Romper", "Ablandar"], "c": 3 },
                    { "q": "GAVILLA", "ops": ["Manojo", "Raíz", "Piedra", "Flor"], "c": 0 },
                    { "q": "CÓMPLICE", "ops": ["Cooperador", "Enemigo", "Indultado", "Grosero"], "c": 0 },
                    { "q": "ALAMBICAR", "ops": ["Congelar", "Solidificar", "Destilar", "Diluir"], "c": 2 },
                    { "q": "CARTAPACIO", "ops": ["Escoba", "Carpeta", "Estuche", "Estufa"], "c": 1 },
                    { "q": "ARCEN", "ops": ["Borde", "Sendero", "Esquina", "Andén"], "c": 0 },
                    { "q": "TREPIDANTE", "ops": ["Vibrante", "Estático", "Apagado", "Inerte"], "c": 0 },
                    { "q": "HETERODOXO", "ops": ["Ortodoxo", "Disidente", "Tradicional", "Convencional"], "c": 1 },
                    { "q": "IMBERBE", "ops": ["Experimentado", "Maduro", "Inexperto", "Novato"], "c": 2 }
                ]
            },
            {
                "titulo": "Test n°9 - Sinónimos",
                "preguntas": [
                    { "q": "PERSUASIVO", "ops": ["Inerme", "Áspero", "Convincente", "Enfadado"], "c": 2 },
                    { "q": "ABOLENGO", "ops": ["Linaje", "Tonto", "Vulgaridad", "Indigencia"], "c": 0 },
                    { "q": "PARCIALIDAD", "ops": ["Agravante", "Plenitud", "Preferencia", "Justicia"], "c": 2 },
                    { "q": "ARTERIA", "ops": ["Conector", "Conducto", "Trayectoria", "Compuerta"], "c": 1 },
                    { "q": "ACOTAR", "ops": ["Responder", "Ampliar", "Engrandecer", "Delimitar"], "c": 3 },
                    { "q": "ARCO", "ops": ["Curva", "Péndulo", "Esfera", "Punto"], "c": 0 },
                    { "q": "AGRANUJADO", "ops": ["Ordenado", "Compacto", "Nuevo", "Deshecho"], "c": 3 },
                    { "q": "JUMENTO", "ops": ["Caballo", "Asno", "Insulto", "Piropo"], "c": 1 },
                    { "q": "ADYUVANTE", "ops": ["Auxiliar", "Principal", "Obstaculizador", "Impedimento"], "c": 0 },
                    { "q": "HERALDO", "ops": ["Mensajero", "Guerrero", "Ciudadano", "Emisario"], "c": 0 },
                    { "q": "CATÁLISIS", "ops": ["Reacción", "Explosión", "Pagano", "Obispo"], "c": 0 },
                    { "q": "PROCLIVE", "ops": ["Estancado", "Propenso", "Redondo", "Alzado"], "c": 1 },
                    { "q": "AEROTERMIA", "ops": ["Energía térmica", "Aeroplano", "Electromagnético", "Fin de una obra"], "c": 0 },
                    { "q": "DANA", "ops": ["Tormenta", "Ciclón", "Gota fría", "Huracán"], "c": 2 },
                    { "q": "DECADENTE", "ops": ["Vibrante", "Esplendoroso", "Decrépito", "Lúcido"], "c": 2 }
                ]
            },
            {
                "titulo": "Test n°10 - Sinónimos",
                "preguntas": [
                    { "q": "MANGAR", "ops": ["Robar", "Prestar", "Cambiar", "Ceder"], "c": 0 },
                    { "q": "AGORAR", "ops": ["Ignorar", "Ocultar", "Negar", "Predecir"], "c": 3 },
                    { "q": "MUNIFICENTE", "ops": ["Tenso", "Amurallado", "Frugal", "Generosa"], "c": 3 },
                    { "q": "DIÁFANO", "ops": ["Opaco", "Transparente", "Rígido", "Áspero"], "c": 1 },
                    { "q": "PRÓDIGO", "ops": ["Mezquino", "Derrochador", "Lógico", "Pequeño"], "c": 1 },
                    { "q": "AMOJONADO", "ops": ["Delimitado", "Angosto", "Inclinado", "Suavizado"], "c": 0 },
                    { "q": "RAUDO", "ops": ["Estático", "Rápido", "Débil", "Tranquilo"], "c": 1 },
                    { "q": "ESTOICISMO", "ops": ["Firmeza", "Artístico", "Humor", "Colisión"], "c": 0 },
                    { "q": "INCISIÓN", "ops": ["Corte", "Unión", "Herida", "Insistencia"], "c": 0 },
                    { "q": "DISENSO", "ops": ["Difamar", "Acuerdo", "Discordia", "Floración"], "c": 2 },
                    { "q": "ORÁCULO", "ops": ["Profeta", "Ídolo", "Guerrero", "Orador"], "c": 0 },
                    { "q": "HEDIONDO", "ops": ["Aromático", "Fragante", "Apestoso", "Rancio"], "c": 2 },
                    { "q": "VESANIA", "ops": ["Locura", "Cicatriz", "Instrucción", "Estable"], "c": 0 },
                    { "q": "IMPOLUTO", "ops": ["Sucio", "Puro", "Manchado", "Inmaculado"], "c": 3 },
                    { "q": "MOROSIDAD", "ops": ["Claridad", "Esmero", "Agilidad", "Lentitud"], "c": 3 }
                ]
            }
        ]
    }
};
