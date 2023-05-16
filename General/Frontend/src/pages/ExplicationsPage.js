import React from 'react';
import '../App.css';
import './RessourcesExplication.css';
import Navbar from '../components/Navbar';
import ButtonExplication from '../ComponentsRevision/ButtonExplication';

//la page des explication des concepts 
function ExplicationsPage(props) {
  return (
    <div className='ExplicationsPage' isAuthenticated={props.isAuthenticated}>
      <Navbar label="Explications" />
      <div className='containerExplication'>

        {/* //concept 1 ----------------------------------------------------------------------------------- */}
        <ButtonExplication label="Pipeline" p1="Le pipeline est un concept important dans les microprocesseurs modernes, y compris le 8086. En termes simples, le pipeline est une technique de traitement des instructions qui permet au processeur d'exécuter plusieurs instructions simultanément, en les divisant en plusieurs étapes.
       Dans un pipeline, chaque instruction est divisée en plusieurs étapes indépendantes, appelées (stades). Chaque stade correspond à une opération spécifique de traitement de l'instruction, comme la récupération de l'instruction depuis la mémoire, la décodage de l'instruction pour déterminer l'opération à effectuer, l'exécution de l'opération et le stockage des résultats.
       L'idée derrière le pipeline est que pendant que le processeur exécute une étape d'une instruction, il peut commencer à exécuter la première étape d'une autre instruction. Ainsi, au lieu d'attendre que chaque instruction soit complètement traitée avant de passer à la suivante, le processeur peut traiter plusieurs instructions simultanément, en utilisant pleinement ses ressources.
       Cela permet d'augmenter considérablement le débit du processeur, car le temps d'exécution total est réduit. Cependant, le pipeline peut également poser des problèmes de performance s'il y a des dépendances entre les instructions. Par exemple, si une instruction utilise le résultat d'une autre instruction qui n'a pas encore été traitée, cela peut ralentir le traitement et réduire l'efficacité du pipeline.
       " />

        {/* //concept 2 ----------------------------------------------------------------------------------- */}
        <ButtonExplication label="La file d'attente" p1="La file d'attente (ou queue) est un concept lié au pipeline dans les microprocesseurs. La file d'attente est une structure de données utilisée pour stocker les instructions qui sont en attente de traitement par le pipeline.
         Dans un pipeline, chaque étape de traitement d'une instruction peut être vue comme un (stade) qui traite des instructions de manière séquentielle. Si une instruction arrive au pipeline alors que toutes les étapes de traitement sont occupées par d'autres instructions, elle doit être mise en attente dans la file d'attente.
         La file d'attente est donc une mémoire tampon qui stocke temporairement les instructions en attente de traitement. Les instructions sont stockées dans la file d'attente dans l'ordre dans lequel elles sont arrivées, de sorte qu'elles peuvent être traitées dans l'ordre approprié une fois que les étapes de traitement sont disponibles.
         La file d'attente est une composante importante pour optimiser les performances du pipeline, car elle permet au processeur de continuer à traiter des instructions pendant que d'autres instructions sont en attente de traitement. Cela évite que le processeur ne perde du temps en attendant que les étapes de traitement soient disponibles, ce qui peut augmenter le débit global du processeur.
"  />
        {/* //concept 3----------------------------------------------------------------------------------- */}
        <ButtonExplication label="Sauvegarde de contexte" p1="La sauvegarde de contexte consiste à enregistrer l'état actuel du processeur avant de passer le contrôle à une autre activité . Cela implique la sauvegarde des registres du processeur, y compris les registres généraux, les registres de segment, les registres de contrôle et les registres d'état des drapeaux, ainsi que d'autres informations telles que le pointeur de pile et le compteur ordinal.En résumé, la sauvegarde de contexte est utilisée dans le processeur pour préserver l'état précédent du programme et permettre la reprise de l'exécution du programme à partir du point où elle s'était arrêtée dans différents scénarios, tels que les appels de routine, les sous-programmes et les traitements d'interruption.." />
       
        {/* //concept 4 ----------------------------------------------------------------------------------- */}
        <ButtonExplication label="Memoire cache" p1="Le cache est une mémoire de petite taille et rapide située sur le processeur ou à proximité immédiate de celui-ci. Son objectif est de stocker les données les plus souvent utilisées par le processeur pour réduire le temps d'accès à la mémoire principale, qui est plus lente que le processeur. En stockant les données les plus fréquemment utilisées dans le cache, le processeur peut accéder à ces données plus rapidement, ce qui améliore les performances globales du système. Le cache est organisé en plusieurs niveaux, chacun avec une taille de mémoire et une vitesse d'accès différentes. Les niveaux de cache supérieurs sont plus petits mais plus rapides, tandis que les niveaux inférieurs sont plus grands mais plus lents. Cependant, le cache peut également poser des problèmes de cohérence de données, car plusieurs copies des mêmes données peuvent être stockées dans différents niveaux de cache. Pour éviter cela, le cache utilise des techniques telles que la surveillance de la cohérence du cache et l'utilisation de protocoles de cohérence de cache pour garantir que toutes les copies de données dans le cache sont synchronisées." />
        
        {/* //concept 5 ----------------------------------------------------------------------------------- */}
        <ButtonExplication label="L'horloge système" p1="L'horloge système est une fonctionnalité essentielle de tout système informatique. Elle fournit un signal électrique régulier qui est utilisé pour synchroniser les différentes opérations dans le système. La fréquence de l'horloge système est mesurée en Hertz (Hz) et détermine la rapidité à laquelle les instructions sont exécutées. Plus la fréquence de l'horloge système est élevée, plus le système peut effectuer d'opérations en une seconde. L'horloge système est généralement produite par un cristal d'horloge, qui est un composant électronique spécialisé qui oscille à une fréquence très précise. L'horloge système est utilisée pour synchroniser les processeurs, les mémoires et les autres composants du système afin qu'ils puissent travailler ensemble de manière coordonnée. En résumé, l'horloge système est un élément crucial pour le fonctionnement efficace et coordonné d'un système informatique." />
       
      </div>
    </div>
  );
}


export default ExplicationsPage