/***************************************************************************************/import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ReactComponent as Fleche } from '../Images/Dropdown.svg';
import { ReactComponent as QuizImg } from '../Images/Quiz.svg';
import './Quiz.css';
/***************************************************************************************/
//introduire avec chaque  question , les options et la bonne reponse selon la categorie 
export const quizData = [
  {
    //categorie 1-------------------------------------------------------------------
    category: "Architecture de base",
    quizzes: [
      {
        question: "Quels sont les éléments clés de l'architecture de Von Neumann?",
        options: ["Unité de commande, unité arithmétique et logique, unité de contrôle et mémoire.", "Unité de traitement, unité de stockage, unité de sortie et périphériques d'entrée.", "CPU, GPU, RAM et ROM."],
        answer: "Unité de commande, unité arithmétique et logique, unité de contrôle et mémoire."
      },
      {
        question: "Comment fonctionne la mémoire dans l'architecture de Von Neumann?",
        options: ["La mémoire est séparée du processeur et des instructions sont chargées en continu dans la mémoire.", "La mémoire est intégrée au processeur et les données et les instructions sont stockées dans la même mémoire.", "La mémoire est un périphérique externe et les données et les instructions sont stockées dans des emplacements différents."],
        answer: "La mémoire est intégrée au processeur et les données et les instructions sont stockées dans la même mémoire."
      },
      {
        question: "Qu'est-ce que le modèle de Von Neumann apporte à la conception de l'ordinateur moderne?",
        options: ["Une architecture qui permet une gestion plus efficace de la mémoire.", "Un modèle pour la conception de processeurs multi-cœurs.", "Un modèle pour la conception d'ordinateurs programmables et universels."],
        answer: "Un modèle pour la conception d'ordinateurs programmables et universels."
      },
      {
        question: "Quel est le rôle de l'unité de contrôle (CU)?",
        options: ["Exécuter les instructions", "Contrôler le flux des instructions et des données", "Stocker les données pour l'UCP"],
        answer: "Contrôler le flux des instructions et des données"
      },
      {
        question: "Quel est le rôle de L'UAL?",
        options: ["Exécuter les instructions", "Stocker les données pour l'UCP", "Effectuer des opérations mathématiques et logiques sur les données"],
        answer: "Effectuer des opérations mathématiques et logiques sur les données"
      },
      {
        question: "Comment l'UCP traite les instructions dans l'architecture de base des ordinateurs?",
        options: ["De manière séquentielle, en exécutant chaque instruction l'une après l'autre", "De manière parallèle, en exécutant plusieurs instructions en même temps", "De manière aléatoire, en choisissant les instructions à exécuter au hasard"],
        answer: "De manière séquentielle, en exécutant chaque instruction l'une après l'autre"
      },
      {
        question: "Quelle est la taille du bus de données de l'Intel 8086?",
        options: ["8 bits", "16 bits", "32 bits"],
        answer: "16 bits"
      },
      {
        question: "Quelle est la taille maximale de la mémoire adressable par l'Intel 8086?",
        options: ["64 Ko", "1 Mo", "16 Mo"],
        answer: "1 Mo"
      },
      {
        question: "Quel est le nombre maximum de registres généraux dans l'Intel 8086?",
        options: ["8", "16", "32"],
        answer: "16"
      },
      {
        question: "Combien de modes d'adressage l'Intel 8086 prend-il en charge?",
        options: ["2", "4", "6"],
        answer: "6"
      },
      {
        question: "Quel est le registre de base pour les opérations d'entrée/sortie dans l'Intel 8086?",
        options: ["AX", "BX", "CX"],
        answer: "AX"
      },
      {
        question: "Quel est le bit de drapeau qui indique une opération de soustraction avec retenue dans l'Intel 8086?",
        options: ["CF", "PF", "ZF"],
        answer: "ZF"
      },
      {
        question: "Quel est le registre qui contient l'adresse de l'instruction suivante dans l'Intel 8086?",
        options: ["SP", "IP", "BP"],
        answer: "IP"
      },
      {
        question: "Quel est le mode d'adressage qui utilise une adresse absolue dans l'Intel 8086?",
        options: ["Mode d'adressage direct", "Mode d'adressage indirect", "Mode d'adressage immédiat"],
        answer: "Mode d'adressage direct"
      },
      {
        question: "Quel est le bit de drapeau qui indique une opération avec résultat nul dans l'Intel 8086?",
        options: ["OF", "SF", "ZF"],
        answer: "ZF"
      }
    ]
  },
  {
    //categorie 2-------------------------------------------------------------------
    category: "Mémoire",
    quizzes: [
      {
        question: "Qu'est-ce que la mémoire dans le contexte de l'architecture de von Neumann ?",
        options: ["Un registre", "Un périphérique d'entrée/sortie", "Un espace de stockage pour les instructions et les données"],
        answer: "Un espace de stockage pour les instructions et les données"
      },
      {
        question: "Qu'est-ce que l'adresse de mémoire?",
        options: ["L'emplacement de la mémoire où les données sont stockées", "L'emplacement de la mémoire où les instructions sont stockées", "L'emplacement de la mémoire où les registres sont stockés"],
        answer: "L'emplacement de la mémoire où les données sont stockées"
      },
      {
        question: "Comment est organisée la mémoire dans l'architecture de von Neumann?",
        options: ["En une seule mémoire pour les instructions et les données", "En deux mémoires séparées pour les instructions et les données", "En trois mémoires séparées pour les instructions, les données et la mémoire cache"],
        answer: "En une seule mémoire pour les instructions et les données"
      },
      {
        question: "Comment est représentée l'adresse d'une cellule mémoire en assembleur?",
        options: ["Par un nombre décimal", "Par un nombre binaire", "Par un mnémonique"],
        answer: "Par un nombre binaire"
      },
      {
        question: "Qu'est-ce que la taille de la mémoire dans l'assembleur?",
        options: ["La taille d'un registre","La taille d'un octet", "La taille d'un bit"],
        answer: "La taille d'un octet"
      },
      {
        question: "Combien de bits peut stocker une mémoire de 4 octets?",
        options: ["4 bits", "16 bits", "32 bits"],
        answer: "32 bits"
      },
      {
        question: "Quelle est la taille maximale de la mémoire adressable par un processeur 32 bits?",
        options: ["2^32 bits", "2^32 octets", "32 octets"],
        answer: "2^32 octets"
      },
      {
        question: "Qu'est-ce que la segmentation en assembleur ?",
        options: ["Une technique de gestion de la mémoire qui permet d'accéder directement à une cellule de mémoire", "Une technique de gestion de la mémoire qui permet de diviser la mémoire en segments", "Une technique de gestion de la mémoire qui permet d'accéder à des zones de mémoire non contiguës"],
        answer: "Une technique de gestion de la mémoire qui permet de diviser la mémoire en segments"
      },
      {
        question: "Qu'est-ce que la fragmentation de la mémoire?",
        options: ["Le fait que la mémoire ne soit pas utilisée de manière optimale", "Le fait que la mémoire soit trop petite pour contenir les données requises", "Le fait que la mémoire ne soit pas suffisamment rapide pour répondre aux demandes d'accès"],
        answer: "Le fait que la mémoire ne soit pas utilisée de manière optimale"
      },
      {
        question: "Qu'est-ce que la pagination de la mémoire?",
        options: ["La division de la mémoire en blocs de taille fixe", "La division de la mémoire en pages de taille fixe", "La division de la mémoire en segments de taille variable"],
        answer: "La division de la mémoire en pages de taille fixe"
      },
      {
        question: "Quelle est la taille de la page de mémoire par défaut dans l'architecture de von Neumann?",
        options: ["1 octet", "4 octet", "8 octet"],
        answer: "4 octet"
      },
      {
        question: "Qu'est-ce qu'un déréférencement de pointeur en assembleur?",
        options: ["L'opération de lecture ou d'écriture de données à l'adresse pointée par un pointeur", "L'opération de lecture ou d'écriture de données à l'adresse contenue dans un registre", "L'opération de lecture ou d'écriture de données à une adresse fixe en mémoire"],
        answer: "L'opération de lecture ou d'écriture de données à l'adresse pointée par un pointeur"
      },
      {
        question: "Qu'est-ce qu'une erreur de segmentation en assembleur?",
        options: ["Une erreur se produisant lors de l'exécution de certaines instructions", "Une erreur se produisant lors de l'utilisation de registres inexistants", "Une erreur se produisant lors de l'accès à une adresse mémoire non allouée"],
        answer: "Une erreur se produisant lors de l'accès à une adresse mémoire non allouée"
      },
      {
        question: "Qu'est-ce que la mémoire cache?",
        options: ["Une mémoire plus grande utilisée pour stocker des données en attente d'utilisation", "Une mémoire plus rapide utilisée pour stocker des données récemment accédées", "Une mémoire utilisée pour stocker des données en cours de traitement"],
        answer: "Une mémoire plus rapide utilisée pour stocker des données récemment accédées"
      },
      {
        question: "Qu'est-ce que la mémoire partagée?",
        options: ["Une technique permettant à plusieurs processus d'accéder à la même zone de mémoire", "Une technique permettant de partager la mémoire entre plusieurs ordinateurs", "Une technique permettant de stocker des données dans un espace de mémoire commun"],
        answer: "Une technique permettant à plusieurs processus d'accéder à la même zone de mémoire"
      }
    ]
  },
  {
    //categorie 3-------------------------------------------------------------------
    category: "Manipulation du pile",
    quizzes: [
      {
        question: "Quelle instruction est utilisée pour empiler une valeur sur la pile dans l'assembleur ?",
        options: ["POP", "PUSH", "JMP"],
        answer: "PUSH"
      },
      {
        question: "Quelle instruction est utilisée pour dépiler une valeur de la pile dans l'assembleur ?",
        options: ["JMP", "CALL", "POP"],
        answer: "POP"
      },
      {
        question: "Dans l'assembleur, la pile est souvent utilisée pour stocker :",
        options: ["Les adresses de retour de sous-programmes", "Les opérandes pour les instructions", "Les adresses des données en mémoire"],
        answer: "Les adresses de retour de sous-programmes"
      },
      {
        question: "La pile est généralement organisée comme une structure :",
        options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "FILO (First In Last Out)"],
        answer: "LIFO (Last In First Out)"
      },
      {
        question: "Comment peut-on utiliser la pile pour sauvegarder des registres ?",
        options: ["En empilant les valeurs des registres sur la pile", "En stockant les valeurs des registres dans une variable", "En utilisant des instructions spéciales de sauvegarde de registres"],
        answer: "En empilant les valeurs des registres sur la pile"
      },
      {
        question: "Que se passe-t-il lorsqu'une valeur est poussée sur une pile pleine ?",
        options: ["La valeur est stockée dans une autre zone de la mémoire", "La valeur est perdue", "Une exception est générée"],
        answer: "Une exception est générée"
      },
      {
        question: "Comment peut-on savoir si une pile est vide ?",
        options: ["En testant l'adresse de la dernière valeur poussée", "En testant l'adresse de la première valeur poussée", "En testant un indicateur de pile vide"],
        answer: "En testant un indicateur de pile vide"
      },
      {
        question: "Quelle instruction est utilisée pour réserver de l'espace pour la pile dans l'assembleur ?",
        options: ["MOV SP, #0", "MOV BP, #0", "SUB SP, #N"],
        answer: "SUB SP, #N"
      },
      {
        question: "Quelle instruction est utilisée pour libérer de l'espace de la pile dans l'assembleur ?",
        options: ["ADD SP, #N", "INC SP", "DEC SP"],
        answer: "ADD SP, #N"
      },
      {
        question: "Quelle est la fonction de l'instruction POPF dans l'assembleur ?",
        options: ["Elle déplace une valeur de la pile vers le registre flags du processeur", "Elle déplace une valeur de la pile vers le registre AX du processeur", "Elle déplace une valeur du registre de drapeau flags vers la pile"],
        answer: "Elle déplace une valeur de la pile vers le registre flags du processeur"
      },
      {
        question: "Dans un processeur x86, quelle est l'instruction qui permet de déplacer une valeur à partir d'une adresse mémoire vers la pile ?",
        options: ["PUSH [BX+SI]","PUSH [BX]","PUSH [BX+DI]"],
        answer: "PUSH [BX]"
      },
      {
        question: "Dans un processeur x86, quelle est l'instruction qui permet de déplacer une valeur de la pile vers un registre ?",
        options: ["MOV [SP], AX", "MOV [AX], SP", "MOV AX, [SP]"],
        answer: "MOV AX, [SP]"
      },
      {
        question: "Comment est représentée la pile dans l'architecture de 8086 ?",
        options: ["Comme un ensemble de registres dédiés", "Comme une zone de mémoire distincte avec un pointeur de pile dédié", "Comme une partie de la mémoire principale"],
        answer: "Comme une partie de la mémoire principale"
      },
      {
        question: "Comment est modifié le pointeur de pile (SP) lorsqu'une valeur est poussée sur la pile dans l'assembleur ?",
        options: ["SP est incrémenté de la taille de la valeur empilée", "SP est décrémenté de la taille de la valeur empilée", "SP est modifié en fonction de la valeur empilée"],
        answer: "SP est décrémenté de la taille de la valeur empilée"
      },
      {
        question: "Comment est modifié le pointeur de pile (SP) lorsqu'une valeur est déplacée de la pile dans l'assembleur ?",
        options: ["SP est incrémenté de la taille de la valeur déplacée", "SP est décrémenté de la taille de la valeur déplacée", "SP est modifié en fonction de la valeur déplacée"],
        answer: "SP est incrémenté de la taille de la valeur déplacée"
      }
    ]
  },
  {
    //categorie 4-------------------------------------------------------------------
    category: "Instructions",
    quizzes: [
      {
        question: "Quelle est la syntaxe de l'instruction ADD en assembleur?",
        options: ["ADD destination, source", "ADD source, destination", "ADD source"],
        answer: "ADD destination, source"
      },
      {
        question: "Quelle est l'instruction en assembleur pour effectuer une division entière?",
        options: ["FDIV", "DIV", "IDIV"],
        answer: "IDIV"
      },
      {
        question: "Comment indiquer une adresse mémoire en assembleur?",
        options: ["En utilisant le symbole *", "En utilisant le symbole #", "En utilisant le symbole @"],
        answer: "En utilisant le symbole *"
      },
      {
        question: "Quelle est l'instruction pour effectuer une comparaison en assembleur?",
        options: ["TEST", "CMP", "MOV"],
        answer: "CMP"
      },
      {
        question: "Comment déclarer une variable en assembleur?",
        options: ["En utilisant la directive VAR", "En utilisant la directive MOV", "En utilisant la directive DB"],
        answer: "En utilisant la directive DB"
      },
      {
        question: "Quelle est l'instruction pour sauter à une étiquette en assembleur?",
        options: ["JMP", "CALL", "RET"],
        answer: "JMP"
      },
      {
        question: "Comment accéder au registre AX en assembleur?",
        options: ["En utilisant le nom AH", "En utilisant le nom AL", "En utilisant le nom AX"],
        answer: "En utilisant le nom AX"
      },
      {
        question: "Comment déclarer une chaîne de caractères en assembleur?",
        options: ["En utilisant la directive STR", "En utilisant la directive DB", "En utilisant la directive MOV"],
        answer: "En utilisant la directive DB"
      },
      {
        question: "Quelle est l'instruction pour déplacer une valeur d'un registre à un autre en assembleur?",
        options: ["CHM", "REG", "MOV"],
        answer: "MOV"
      },
      {
        question: "Comment indiquer une valeur hexadécimale en assembleur?",
        options: ["En utilisant le préfixe 0x", "En utilisant le préfixe #", "En utilisant le préfixe @"],
        answer: "En utilisant le préfixe 0x"
      },
      {
        question: "Quelle est l'instruction pour effectuer un saut conditionnel si le bit de carry est à 1 en assembleur?",
        options: ["JZ", "JNC", "JC"],
        answer: "JC"
      },
      {
        question: "Comment accéder au registre SP en assembleur?",
        options: ["En utilisant le nom SP", "En utilisant le nom BP", "En utilisant le nom BP"],
        answer: "En utilisant le nom SP"
      },
      {
        question: "Quelle est l'instruction pour effectuer un saut conditionnel si deux valeurs sont égales en assembleur?",
        options: ["JNE", "JE", "JG"],
        answer: "JE"
      },
      {
        question: "Comment déclarer un tableau en assembleur?",
        options: ["En utilisant la directive DB", "En utilisant la directive DW", "En utilisant la directive DQ"],
        answer: "En utilisant la directive DW"
      },
      {
        question: "Quelle est l'instruction pour effectuer un saut conditionnel si une valeur est supérieure ou égale à une autre en assembleur?",
        options: ["JE", "JNL", "JG"],
        answer: "JNL"
      }
    ]
  },
  {
    //categorie 5-------------------------------------------------------------------
    category: "Programmation",
    quizzes: [
      {
        question: "Comment appelle-t-on la mémoire volatile utilisée pour stocker les variables temporaires en assembleur?",
        options: ["La pile", "Le tas", "Le registre"],
        answer: "La pile"
      },
      {
        question: "Comment appelle-t-on l'espace de stockage réservé pour stocker les variables globales en assembleur?",
        options: ["La tas", "Le segment de code", "Le segment de données"],
        answer: "Le segment de données"
      },
      {
        question: "Comment appelle-t-on l'espace de stockage réservé pour stocker les instructions en assembleur?",
        options: ["Le segment de code", "La pile", "Le segment de donneés"],
        answer: "Le segment de code"
      },
      {
        question: "Comment appelle-t-on le registre utilisé pour stocker le pointeur de pile en assembleur?",
        options: ["IP", "SP", "BP"],
        answer: "SP"
      },
      {
        question: "Comment appelle-t-on le registre utilisé pour stocker l'adresse de l'instruction suivante en assembleur?",
        options: ["SP", "BP", "IP"],
        answer: "IP"
      },
      {
        question: "Comment appelle-t-on le registre utilisé pour stocker l'index de la source dans les opérations de chaîne en assembleur?",
        options: ["DI", "SI", "BI"],
        answer: "SI"
      },
      {
        question: "Comment appelle-t-on le registre utilisé pour stocker la base de la pile en assembleur?",
        options: ["BP", "SP", "IP"],
        answer: "BP"
      },
      {
        question: "Comment appelle-t-on le registre utilisé pour stocker le pointeur de données en assembleur?",
        options: ["SP", "SI", "IP"],
        answer: "SI"
      },
      {
        question: "Comment appelle-t-on le registre utilisé pour stocker le compteur de boucle en assembleur?",
        options: ["CX", "AX", "BX"],
        answer: "CX"
      },
      {
        question: "Comment appelle-t-on l'instruction qui détermine la longueur d'une chaîne en assembleur?",
        options: ["LENGTH", "STRLEN", "SIZE"],
        answer: "STRLEN"
      },
      {
        question: "Comment appelle-t-on l'instruction qui copie une chaîne d'une zone de mémoire à une autre en assembleur?",
        options: ["STRCPY", "COPY", "MOVSB"],
        answer: "MOVSB"
      },
      {
        question: "Comment appelle-t-on l'instruction qui réserve de l'espace pour stocker des variables locales en assembleur?",
        options: ["RET", "ENTER", "CALL"],
        answer: "ENTER"
      },
      {
        question: "Comment appelle-t-on l'instruction qui réinitialise le pointeur de pile en assembleur?",
        options: ["RET", "POP", "LEAVE"],
        answer: "LEAVE"
      },
      {
        question: "Comment appelle-t-on l'instruction qui copie un bloc de mémoire à une autre adresse en assembleur?",
        options: ["MOVS", "REP", "MOV"],
        answer: "MOVS"
      },
      {
        question: "Quelle est la différence entre les instructions MOV et XCHG en assembleur?",
        options: ["MOV copie une valeur tandis que XCHG échange deux valeurs", "MOV déplace une valeur tandis que XCHG échange deux valeurs", "MOV met à jour une valeur tandis que XCHG déplace une valeur"],
        answer: "MOV copie une valeur tandis que XCHG échange deux valeurs"
      }
    ]
  },
  {
    //categorie 6-------------------------------------------------------------------
    category: "Autre",
    quizzes: [
      {
        question: "Que signifie l'acronyme CISC?",
        options: ["Complex Instruction Set Computing", "Centralized Instruction Set Computing", "Common Instruction Set Computing"],
        answer: "Complex Instruction Set Computing"
      },
      {
        question: "Quel est l'avantage principal d'une architecture CISC?",
        options: ["Une compatibilité avec les anciens logiciels", "Une exécution plus rapide des instructions", "Une grande variété d'instructions complexes disponibles"],
        answer: "Une grande variété d'instructions complexes disponibles"
      },
      {
        question: "Dans quelle mesure les instructions sont-elles complexes dans une architecture CISC?",
        options: ["Les instructions sont simples et courtes","Les instructions sont très complexes et longues", "Les instructions sont de complexité variable"],
        answer: "Les instructions sont très complexes et longues"
      },
      {
        question: "Combien de cycles d'horloge sont nécessaires pour exécuter une instruction CISC?",
        options: ["Un à deux cycles d'horloge", "Trois à cinq cycles d'horloge", "Plus de cinq cycles d'horloge"],
        answer: "Plus de cinq cycles d'horloge"
      },
      {
        question: "Quel est le principal inconvénient d'une architecture CISC?",
        options: ["Les instructions sont difficiles à coder", "Les instructions sont lentes à exécuter", "Les processeurs sont plus chers à fabriquer"],
        answer: "Les instructions sont lentes à exécuter"
      },
      {
        question: "Que signifie l'acronyme RISC?",
        options: ["Reduced Instruction Set Computing", "Rapid Instruction Set Computing", "Robust Instruction Set Computing"],
        answer: "Reduced Instruction Set Computing"
      },
      {
        question: "Quel est l'avantage principal d'une architecture RISC?",
        options: ["Une compatibilité avec les anciens logiciels", "Une grande variété d'instructions complexes disponibles", "Une exécution plus rapide des instructions"],
        answer: "Une exécution plus rapide des instructions"
      },
      {
        question: "Dans quelle mesure les instructions sont-elles complexes dans une architecture RISC?",
        options: ["Les instructions sont très complexes et longues", "Les instructions sont simples et courtes", "Les instructions sont de complexité variable"],
        answer: "Les instructions sont simples et courtes"
      },
      {
        question: "Combien de cycles d'horloge sont nécessaires pour exécuter une instruction RISC?",
        options: ["Un à deux cycles d'horloge", "Trois à cinq cycles d'horloge", "Plus de cinq cycles d'horloge"],
        answer: "Un à deux cycles d'horloge"
      },
      {
        question: "Qu'est-ce que EPIC (Explicitly Parallel Instruction Computing)?",
        options: ["Une technologie de traitement de signal numérique (DSP)", "Une architecture de traitement qui utilise des instructions très longues (VLIW)", "Une technique de traitement qui permet d'effectuer plusieurs instructions sur des données différentes simultanément (MIMD)"],
        answer: "Une architecture de traitement qui utilise des instructions très longues (VLIW)"
      },
      {
        question: "Qu'est-ce que DSP (Digital Signal Processor)?",
        options: ["Une technologie de traitement de signal numérique", "Une architecture de traitement qui utilise des instructions très longues (VLIW)", "Une technique de traitement qui permet d'effectuer plusieurs instructions sur des données différentes simultanément (MIMD)"],
        answer: "Une technologie de traitement de signal numérique"
      },
      {
        question: "Qu'est-ce que VLIW (Very Long Instruction Word)?",
        options: ["Une technologie de traitement de signal numérique (DSP)", "Une architecture de traitement qui utilise des instructions très longues", "Une technique de traitement qui permet d'effectuer plusieurs instructions sur des données différentes simultanément (MIMD)"],
        answer: "Une architecture de traitement qui utilise des instructions très longues"
      },
      {
        question: "Qu'est-ce que MIMD (Multiple Instruction Multiple Data)?",
        options: ["Une technologie de traitement de signal numérique (DSP)", "Une architecture de traitement qui utilise des instructions très longues (VLIW)", "Une technique de traitement qui permet d'effectuer plusieurs instructions sur des données différentes simultanément"],
        answer: "Une technique de traitement qui permet d'effectuer plusieurs instructions sur des données différentes simultanément"
      },
      {
        question: "Quelle architecture de traitement utilise des instructions très longues?",
        options: ["DSP (Digital Signal Processor)", "VLIW (Very Long Instruction Word)", "SIMD (Single Instruction Multiple Data)"],
        answer: "VLIW (Very Long Instruction Word)"
      },
      {
        question: "Quelle architecture de traitement permet d'effectuer plusieurs instructions sur des données différentes simultanément?",
        options: ["MIMD (Multiple Instruction Multiple Data)", "DSP (Digital Signal Processor)", "VLIW (Very Long Instruction Word)"],
        answer: "MIMD (Multiple Instruction Multiple Data)"
      },
      {
        question: "Quelle architecture de traitement permet d'effectuer la même instruction sur plusieurs données simultanément?",
        options: ["DSP (Digital Signal Processor)", "VLIW (Very Long Instruction Word)", "SIMD (Single Instruction Multiple Data)"],
        answer: "SIMD (Single Instruction Multiple Data)"
      },
      {
        question: "Quelle technologie est spécialement conçue pour le traitement de signal numérique?",
        options: ["EPIC (Explicitly Parallel Instruction Computing)", "DSP (Digital Signal Processor)", "MIMD (Multiple Instruction Multiple Data)"],
        answer: "DSP (Digital Signal Processor)"
      },
      {
        question: "Quelle architecture de traitement est souvent utilisée dans les supercalculateurs?",
        options: ["VLIW (Very Long Instruction Word)", "MIMD (Multiple Instruction Multiple Data)", "DSP (Digital Signal Processor)"],
        answer: "MIMD (Multiple Instruction Multiple Data)"
      },
      {
        question: "Quelle architecture de traitement est souvent utilisée dans les processeurs graphiques (GPU)?",
        options: ["SIMD (Single Instruction Multiple Data)", "VLIW (Very Long Instruction Word)", "EPIC (Explicitly Parallel Instruction Computing)"],
        answer: "SIMD (Single Instruction Multiple Data)"
      },
    ]
  }
];

const QuizApp = (props) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/revision/quiz/${category}`);
  };

  return (
    <div className="quizz">
    <Navbar label="Catégories"  isAuthenticated={props.isAuthenticated}/>
      <p className="p">Choisissez une catégorie</p>
      <ul className="categories">
        {quizData.map((data) => (
          <li key={data.category}>
            <button className="category-button" onClick={() => handleCategorySelect(data.category)}>
              {data.category}
              <Fleche className="flech"/>
            </button>
          </li>
        ))}
      </ul>
    <QuizImg className="quiz-img"/>
    </div>
  );
};

export default QuizApp;

