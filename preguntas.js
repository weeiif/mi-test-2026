const datosTemas = {
    "bloque1": {
        n: "📜 DERECHOS DE LA CIUDADANÍA",
        subcarpetas: [
            {
                nombre: "1. Derechos Humanos (Acceso gratuito)",
                tests: [
                    {
                        id: 1, nombre: "DD.HH - Test n°1",
                        preguntas: [
                            { "q": "¿Cuál es el principal instrumento del Consejo de Europa para la protección de los derechos civiles y políticos?", "ops": ["El Tratado de Lisboa", "La Declaración Universal de DD.HH.", "La Carta Social Europea", "El Convenio Europeo"], "c": 3 },
                            { "q": "¿Qué sentencias del TEDH tienen fuerza vinculante?", "ops": ["Las sentencias preliminares", "Las sentencias definitivas", "Las sentencias provisionales", "Las recomendaciones"], "c": 1 },
                            { "q": "La tercera generación de Derechos Humanos se relaciona con qué tipo de derechos?", "ops": ["Derechos ambientales y de paz", "Derechos civiles", "Derechos de libertad individual", "Derechos políticos"], "c": 0 }
                        ]
                    }
                ]
            },
            { nombre: "2. Derechos y Libertades en la Constitución (Acceso gratuito)", tests: [] },
            { nombre: "3. Decreto Legislativo 1/2023: Ley Igualdad y Vidas libres de Violencia Machista", tests: [] },
            { nombre: "4. Protección de datos personales y garantía de derechos digitales", tests: [] },
            { nombre: "5. Ley 16/2023: Autoridad Vasca de Protección de Datos", tests: [] },
            { nombre: "6. Derechos Generales de la Ciudadanía en sus relaciones con la administración", tests: [] },
            { nombre: "7. Ley Orgánica 10/2022: Garantía integral de la libertad sexual", tests: [] },
            { nombre: "8. Ley 2/2024: Infancia y adolescencia", tests: [] },
            { nombre: "9. Ley 4/2023: Igualdad real personas trans y derechos LGTBI", tests: [] },
            { nombre: "10. Ley 4/2024: No discriminación identidad de género y personas trans", tests: [] }
        ]
    },
    "bloque2": {
        n: "🏛️ ORGANIZACIÓN POLÍTICO ADMINISTRATIVA",
        subcarpetas: [
            { nombre: "11. El espacio europeo: historia y competencias de las instituciones", tests: [] },
            { nombre: "12. Organización territorial del Estado en la Constitución", tests: [] },
            { nombre: "13. Organización política y administrativa de la CAPV", tests: [] },
            { nombre: "14. El municipio: territorio, población y competencias", tests: [] },
            { nombre: "15. Régimen Jurídico del Sector Público", tests: [] },
            { nombre: "16. Bases de las Entidades Locales", tests: [] },
            { nombre: "17. Decreto 218/2024: Estructura orgánica Departamento de Seguridad", tests: [] }
        ]
    },
    "bloque3": {
        n: "📂 FUENTES DEL DERECHO Y PROCEDIMIENTO ADMINISTRATIVO",
        subcarpetas: [
            { nombre: "18. Fuentes del derecho administrativo", tests: [] },
            { nombre: "19. Procedimiento Administrativo Común de las Administraciones Públicas", tests: [] },
            { nombre: "20. El procedimiento administrativo", tests: [] },
            { nombre: "21. Régimen Jurídico del Sector Público: potestad sancionadora", tests: [] }
        ]
    },
    "bloque4": {
        n: "⚖️ DERECHO PENAL. PARTE GENERAL",
        subcarpetas: [
            { nombre: "22. Título Preliminar del Código Penal", tests: [] },
            { nombre: "23. De los delitos", tests: [] },
            { nombre: "24. De las causas de exención de responsabilidad criminal", tests: [] },
            { nombre: "25. De las circunstancias que atenúan o agravan la responsabilidad", tests: [] },
            { nombre: "26. De las personas criminalmente responsables de los delitos", tests: [] }
        ]
    },
    "bloque5": {
        n: "🚦 SEGURIDAD VIAL",
        subcarpetas: [
            { nombre: "27. Reglamento General de Circulación: Ámbito de aplicación", tests: [] },
            { nombre: "28. Ley de Seguridad Vial: conceptos básicos", tests: [] },
            { nombre: "29. Infracciones en la Ley de Seguridad Vial", tests: [] },
            { nombre: "30. Sanciones en la Ley de Seguridad Vial", tests: [] },
            { nombre: "31. Responsabilidad en la Ley de Seguridad Vial", tests: [] },
            { nombre: "32. Procedimiento Sancionador en la Ley de Seguridad Vial", tests: [] },
            { nombre: "33. Normas de comportamiento en la circulación", tests: [] },
            { nombre: "34. Infracciones que llevan aparejada la pérdida de puntos", tests: [] },
            { nombre: "35. Autorizaciones para conducir", tests: [] }
        ]
    },
    "bloque6": {
        n: "🛡️ PREVENCIÓN DE RIESGOS",
        subcarpetas: [
            { nombre: "36. Decreto Legislativo 1/2017: Ley de Gestión de Emergencias", tests: [] },
            { nombre: "37. Ley de Prevención de Riesgos Laborales", tests: [] },
            { nombre: "38. Evacuación de edificios: planes de autoprotección", tests: [] },
            { nombre: "39. Primeros auxilios", tests: [] }
        ]
    },
    "bloque7": {
        n: "🌄 HISTORIA Y DEMOGRAFÍA DEL PAÍS VASCO",
        subcarpetas: [
            { nombre: "40. Historia del País Vasco en el siglo XIX", tests: [] },
            { nombre: "41. Historia del País Vasco en el siglo XX", tests: [] },
            { nombre: "42. Medio natural de la Comunidad Autónoma del País Vasco", tests: [] },
            { nombre: "43. Panorama Demográfico 2022", tests: [] }
        ]
    },
    "bloque8": {
        n: "🚓 POLICÍA DE SERVICIO A LA CIUDADANÍA",
        subcarpetas: [
            { nombre: "44. Origen y desarrollo de la policía del País Vasco", tests: [] },
            { nombre: "45. Ley de Ordenación del Sistema de Seguridad Pública de Euskadi", tests: [] },
            { nombre: "46. Ley 4/2015 de Protección de la Seguridad Ciudadana", tests: [] },
            { nombre: "47. Ley Orgánica 9/1983 reguladora del derecho de reunión", tests: [] },
            { nombre: "48. Régimen de autorización de videocámaras por la Policía", tests: [] },
            { nombre: "49. Composición y funcionamiento comisiones coordinación policial", tests: [] }
        ]
    },
    "bloque9": {
        n: "🗣️ COMUNICACIÓN",
        subcarpetas: [
            { nombre: "50. La ciudadanía como destinataria de los servicios públicos", tests: [] },
            { nombre: "51. Comunicación en la administración y lenguaje no sexista", tests: [] }
        ]
    },
    "bloque10": {
        n: "✍️ NORMALIZACIÓN DEL USO DEL EUSKERA",
        subcarpetas: [
            { nombre: "52. Plan General de Normalización del uso del euskera", tests: [] }
        ]
    },
    "bloque11": {
        n: "🚺 VIOLENCIA DE GÉNERO",
        subcarpetas: [
            { nombre: "53. Acuerdo Interinstitucional atención a víctimas violencia machista", tests: [] },
            { nombre: "54. Ley Orgánica Medidas Protección Integral Violencia Género", tests: [] }
        ]
    },
    "bloque_examenes": {
        n: "📝 EXÁMENES OFICIALES",
        subcarpetas: [
            { nombre: "Preguntas exámenes oficiales", tests: [] },
            { nombre: "Preguntas promoción 35", tests: [] }
        ]
    },
    "bloque_simulacros": {
        n: "⏱️ SIMULACROS / PLAZOS",
        subcarpetas: [
            { nombre: "Simulacros - Temario completo", tests: [] },
            { nombre: "Simulacros - Solo temas nuevos (promo 34)", tests: [] },
            { nombre: "Plazos Ley 39/2015", tests: [] },
            { nombre: "Plazos - Todos los temas", tests: [] },
            { nombre: "Fechas - Todas las fechas", tests: [] },
            { nombre: "Todas las infracciones", tests: [] }
        ]
    }
};
