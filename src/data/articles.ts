export interface Article {
  id: number
  slug: string
  category: 'Actualités' | 'Héritage & Culture' | 'Diaspora Pratique'
  date: string
  dateISO: string
  readTime: string
  title: string
  metaDescription: string
  excerpt: string
  content: string
  icon: string
  colorBg: string
  colorText: string
  keywords: string[]
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'lancement-officiel-badoumka-usa',
    category: 'Actualités',
    date: '15 mars 2026',
    dateISO: '2026-03-15',
    readTime: '6 min',
    title: 'Lancement officiel de Badoumka USA : une nouvelle page s\'ouvre',
    metaDescription: 'Retour sur la fondation de Badoumka USA, l\'association des Fils et Filles de Badoumka aux États-Unis. Histoire, vision et premiers pas de notre communauté.',
    excerpt: 'Après des mois de préparation et de mobilisation au sein de notre diaspora, l\'Association des Fils et Filles de Badoumka aux États-Unis tient désormais ses premières réunions officielles. Retour sur une fondation historique.',
    keywords: ['Badoumka USA', 'association camerounaise', 'diaspora Badoumka', 'fondation association', 'Cameroun États-Unis'],
    content: `Notre communauté dispersée aux quatre coins des États-Unis — du Maryland à New York, du Texas à l'Ohio — a franchi une étape décisive en 2024 avec la fondation formelle de Badoumka USA.

L'association est née d'un constat simple : nos compatriotes de Badoumka vivent souvent isolés, loin de leur famille, de leurs traditions, et d'un soutien communautaire solide. Face à ce manque, un groupe de fondateurs s'est réuni avec une vision claire : créer un espace d'appartenance, de solidarité et de transmission culturelle.

**Notre devise**

Guidée par la devise *"Servir avec honneur, unir avec sagesse, transmettre avec amour"*, l'association structure ses activités autour de trois piliers fondamentaux qui reflètent nos valeurs profondes : l'unité, l'intégrité, la solidarité et l'héritage.

**Trois programmes au service de Badoumka**

Le programme **Héritiers Badoumka** est destiné à notre jeunesse : il vise à transmettre notre langue, nos traditions et notre histoire aux générations nées ici, loin du village ancestral. Le programme **Badoumka Cares** incarne notre solidarité concrète — un fonds communautaire pour soutenir les membres dans le besoin. Enfin, les **rencontres mensuelles** rythment la vie de l'association et renforcent les liens entre membres.

**Une présence dans 8 régions métropolitaines**

Depuis le lancement, notre mouvement s'est étendu à 8 régions clés des États-Unis : la région de Washington D.C., la région métropolitaine de New York, le Texas (Houston et Dallas), l'Ohio, la Californie, l'Île-de-France et les Carolines. Cette expansion rapide témoigne d'un besoin réel au sein de notre diaspora.

**Les premiers résultats : au-delà des attentes**

En seulement quelques mois, Badoumka USA compte déjà plus de 150 membres actifs. Les réunions mensuelles rassemblent régulièrement 30 à 50 personnes, dont une proportion croissante de jeunes (18-35 ans). Ces chiffres ne reflètent que le début : nous savons que beaucoup d'autres compatriotes attendent juste le moment opportun pour se joindre à nous.

Les premiers succès incluent le lancement de notre programme Badoumka Cares, qui a déjà soutenu trois familles en situation difficile. De plus, le programme Héritiers Badoumka a accueilli 25 jeunes qui suivent régulièrement nos ateliers de langue et de culture.

**Ce que les membres en disent**

*"Après 15 ans aux États-Unis, je me sentais coupé de mes racines. Badoumka USA m'a redonné un sentiment d'appartenance que j'avais perdu."* — Un membre de la région de Washington D.C.

*"C'est incroyable de pouvoir grandir tout en comprenant qui je suis vraiment. Grâce aux Héritiers Badoumka, je parle maintenant le Bamiléké avec ma mère."* — Une jeune participante au programme Héritiers

**Le calendrier de Badoumka USA**

Les réunions se tiennent chaque **2e dimanche du mois**, alternant entre les différentes régions (DMV, New York, Texas, Ohio) pour faciliter la participation de tous les membres. Ces rencontres sont ouvertes à tout fils ou fille de Badoumka résidant aux États-Unis.

**Regarder vers l'avenir**

En 2026, nous avons des ambitions claires : doubler notre effectif, lancer des initiatives de soutien au village de Badoumka au Cameroun, et établir des partenariats avec d'autres associations camerounaises. Notre succès précoce montre que Badoumka USA remplit un vide crucial dans la vie de notre communauté.

Rejoignez-nous — nous sommes plus forts ensemble.`,
    icon: '📢',
    colorBg: 'bg-[#0F5132]',
    colorText: 'text-white',
  },
  {
    id: 2,
    slug: 'chefferie-badoumka-tradition-millenaire',
    category: 'Héritage & Culture',
    date: '1 mars 2026',
    dateISO: '2026-03-01',
    readTime: '6 min',
    title: 'La Chefferie de Badoumka : gardienne d\'une tradition millénaire',
    metaDescription: 'Découvrez l\'histoire et le rôle de la chefferie traditionnelle de Badoumka au Cameroun. Institution Bamiléké pluriséculaire, gardienne de l\'identité et de la culture Badoumka.',
    excerpt: 'Au cœur du pays Bamiléké au Cameroun, la chefferie de Badoumka incarne une organisation sociale et spirituelle unique. Découvrez l\'histoire et le rôle de cette institution fondatrice de notre identité.',
    keywords: ['chefferie Badoumka', 'Bamiléké tradition', 'culture camerounaise', 'patrimoine Badoumka', 'Cameroun Ouest'],
    content: `La chefferie traditionnelle de Badoumka s'inscrit dans la grande tradition des royaumes Bamiléké des Hauts Plateaux de l'Ouest Cameroun. Institution pluriséculaire, elle constitue le nœud central autour duquel s'organisent la vie sociale, les décisions collectives et la transmission de la mémoire collective.

**Le Chef, figure centrale**

Le Chef — ou *Fon* — n'est pas seulement un chef politique. Il est le gardien des ancêtres, le médiateur entre le monde des vivants et celui des esprits, et le protecteur de l'harmonie sociale. Son autorité est spirituelle autant que temporelle, et les décisions importantes se prennent toujours en consultation avec les notables et les sociétés secrètes.

**Une architecture chargée de sens**

La case du Chef — reconnaissable à ses sculptures de bois ornant poteaux et linteaux — est un véritable musée vivant. Les motifs de grenouilles, de tisserins et d'araignées qui l'ornent ne sont pas de simples décorations : chacun raconte une histoire, un avertissement, une promesse. Ces symboles sont aussi présents dans le tissu kente qui accompagne nos cérémonies.

**Les sociétés secrètes et la gouvernance**

La chefferie de Badoumka, comme toutes les chefferies Bamiléké, s'appuie sur un réseau de sociétés secrètes — groupes d'âge, associations initiatiques — qui jouent un rôle crucial dans la gouvernance. Ces structures garantissent que le pouvoir ne repose pas sur un seul homme mais sur une communauté organisée.

**Pourquoi le préserver depuis les États-Unis ?**

À des milliers de kilomètres de Badoumka, nos enfants nés ici risquent de grandir sans savoir d'où ils viennent. C'est précisément pourquoi Badoumka USA a inscrit la transmission culturelle au cœur de son projet. Connaître la chefferie, c'est comprendre qui nous sommes — et c'est ce que le programme Héritiers Badoumka s'engage à transmettre.`,
    icon: '🏛️',
    colorBg: 'bg-[#A8391C]',
    colorText: 'text-white',
  },
  {
    id: 3,
    slug: 'integration-identite-camerounaise-usa',
    category: 'Diaspora Pratique',
    date: '18 février 2026',
    dateISO: '2026-02-18',
    readTime: '5 min',
    title: 'S\'intégrer sans se perdre : garder son identité camerounaise aux États-Unis',
    metaDescription: 'Comment préserver son identité camerounaise tout en s\'intégrant aux États-Unis ? Conseils pratiques pour la diaspora Badoumka et camerounaise en Amérique.',
    excerpt: 'Vivre aux États-Unis, c\'est souvent naviguer entre deux mondes. Comment trouver l\'équilibre entre intégration réussie et fidélité à ses racines ? Quelques pistes concrètes pour notre communauté.',
    keywords: ['diaspora camerounaise USA', 'identité culturelle', 'intégration Cameroun', 'communauté africaine États-Unis', 'Badoumka diaspora'],
    content: `L'immigration est une aventure extraordinaire — et un défi identitaire permanent. Pour les Camerounais installés aux États-Unis, la question n'est pas de choisir entre ici et là-bas, mais d'apprendre à habiter les deux à la fois.

**Transmettre la langue**

Le français — et pour beaucoup d'entre nous, les langues locales comme le Bamiléké — est le premier pont vers nos origines. Parler sa langue maternelle à la maison, même partiellement, aide les enfants à ancrer leur identité dans quelque chose de concret. Des associations comme Badoumka USA organisent des activités où nos enfants entendent et pratiquent cette langue naturellement.

**Créer des rituels culturels**

Les fêtes calendaires camerounaises (fête nationale le 20 mai, période des récoltes, cérémonies familiales) peuvent être célébrées même loin du pays. Un repas partagé, une musique, une histoire racontée — ces petits gestes construisent une mémoire familiale puissante que rien ne peut effacer.

**S'appuyer sur la communauté**

L'isolement est l'ennemi principal de l'identité en diaspora. Rejoindre une association communautaire — comme Badoumka USA — c'est se donner accès à un réseau de pairs qui vivent les mêmes tensions, partagent les mêmes références, et peuvent s'entraider concrètement sur le plan financier, professionnel ou émotionnel.

**Voyager au pays régulièrement**

Autant que possible, un retour au Cameroun — même bref — recharge les batteries culturelles d'une façon que rien ne peut remplacer. Pour nos enfants surtout, poser les pieds sur la terre de leurs grands-parents, entendre les voix du marché de Bafoussam, goûter à la cuisine de chez nous, est une expérience fondatrice.

**L'exemple que nous donnons**

En rejoignant et en soutenant Badoumka USA, vous montrez à vos enfants que la fierté de ses origines n'est pas incompatible avec la réussite en Amérique. Au contraire, c'est souvent cette ancre identitaire qui donne la force d'avancer.`,
    icon: '🌍',
    colorBg: 'bg-[#C5A200]',
    colorText: 'text-[#2C1A0E]',
  },
  {
    id: 4,
    slug: 'badoumka-cares-solidarite-communautaire',
    category: 'Actualités',
    date: '5 février 2026',
    dateISO: '2026-02-05',
    readTime: '6 min',
    title: 'Badoumka Cares : la solidarité concrète au service des nôtres',
    metaDescription: 'Le programme Badoumka Cares de l\'association Badoumka USA : comment fonctionne notre fonds d\'entraide communautaire pour les Camerounais aux États-Unis.',
    excerpt: 'Le programme Badoumka Cares incarne la valeur de solidarité qui est au cœur de notre association. Fonctionnement, critères d\'éligibilité, et premiers retours d\'expérience.',
    keywords: ['Badoumka Cares', 'entraide camerounaise', 'solidarité diaspora', 'association Badoumka', 'soutien communautaire USA'],
    content: `Quand un membre de notre communauté traverse une épreuve difficile — maladie, perte d'emploi, deuil, urgence médicale —, personne ne devrait avoir à y faire face seul. C'est la philosophie derrière Badoumka Cares, le programme d'entraide solidaire de Badoumka USA.

**Comment ça fonctionne ?**

Chaque membre actif contribue à un fonds commun lors des réunions mensuelles. Ce fonds est géré de manière transparente par le bureau exécutif, avec une comptabilité accessible à tous les membres. Lorsqu'une situation d'urgence est déclarée et validée, le soutien est mobilisé rapidement — en quelques jours.

**Qui peut en bénéficier ?**

Tout membre en règle de cotisation depuis au moins trois mois peut solliciter un soutien Badoumka Cares. La demande est traitée avec discrétion et bienveillance par le comité de suivi. Nous croyons que la dignité de chaque membre est sacrée, et nos processus reflètent cette valeur.

**Critères d'éligibilité détaillés**

Pour bénéficier du fonds Badoumka Cares, vous devez :

1. Être membre actif depuis au moins 3 mois
2. Avoir participé à au moins 2 réunions mensuelles
3. Être à jour dans vos cotisations
4. Décrire votre situation d'urgence par écrit (formulaire confidentiel)
5. Accepter une brève entrevue avec le comité (pour comprendre vos besoins)

Les types de situations couvertes incluent : urgences médicales, pertes d'emploi, décès familial, accidents, frais d'hospitalisation non couverts par l'assurance.

**La transparence comme pilier**

Le bureau de Badoumka USA publie régulièrement un état des finances de l'association lors des réunions mensuelles. Chaque membre peut voir exactement comment les fonds sont utilisés. Cette transparence est fondamentale à notre modèle de confiance communautaire.

Nos rapports mensuels indiquent :
- Montant total collecté ce mois-ci
- Aides distribuées (anonymisées)
- Solde du fonds
- Projections pour les mois à venir

**Métriques d'impact : ce que nous avons accompli**

Depuis le lancement de Badoumka Cares en janvier 2026 :
- **6 familles soutenues** pour des situations d'urgence
- **Montant total distribué** : 8,500 USD
- **Aide moyenne par situation** : 1,400 USD
- **Taux de participation** : 73% des membres actifs cotisent régulièrement

Ces chiffres montrent que nos membres croient à cette mission. Plus nous sommes nombreux, plus nous pouvons aider.

**Histoires de succès (anonymisées)**

*Situation 1 :* Un membre a perdu son emploi du jour au lendemain. Badoumka Cares lui a fourni une aide d'urgence de 1,500 USD pour couvrir un mois de loyer et de nourriture, ce qui lui a donné le temps de trouver un nouveau travail.

*Situation 2 :* Une mère célibataire a dû faire face à une urgence médicale inattendue. Grâce à Badoumka Cares, elle n'a pas eu à choisir entre sa santé et le bien-être financier de ses enfants.

*Situation 3 :* Un jeune professionnel a eu un accident de voiture. Le fonds l'a aidé à couvrir les franchises d'assurance qu'il ne pouvait pas payer seul.

**Comment demander de l'aide**

Si vous traversez une période difficile :

1. Contactez le Responsable Badoumka Cares (nom et email à votre réunion mensuelle)
2. Complétez le formulaire de demande (confidentiel)
3. Participez à un entretien discret avec le comité
4. Recevez une décision dans les 7-10 jours
5. L'aide est transférée directement à votre compte (ou par autre arrangement)

Tout le processus est confidentiel. Seuls les membres du comité Badoumka Cares connaissent votre situation.

**Ce que cela signifie pour vous**

Rejoindre Badoumka USA, c'est aussi rejoindre ce filet de sécurité. Avec Badoumka Cares, vous ne traverserez jamais une crise majeure sans le soutien de votre communauté. C'est ça, la solidarité concrète.

Contactez-nous pour en savoir plus.`,
    icon: '🤝',
    colorBg: 'bg-[#0F5132]',
    colorText: 'text-white',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}
