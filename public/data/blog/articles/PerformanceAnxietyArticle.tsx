import { Container, List, ListItem, Space, Text, Title } from '@mantine/core';
import MonImage from '@/app/assets/image.png';
import { Article } from '../topics';

export const PerformanceAnxietyArticle: Article = {
  name: 'L’anxiété de performance',
  picture: MonImage,
  description: `Dans l’intimité, les doutes et les peurs peuvent parfois s’inviter sans prévenir,
  transformant un moment censé être de plaisir et de connexion en une source de stress
  intense. L’anxiété de performance, ce trouble qui touche de nombreuses personnes, n’est pas`,
  content: (
    <Container>
      <Title order={1}>L’anxiété de performance : 5 astuces pour reprendre confiance en soi</Title>

      <Text>
        Dans l’intimité, les doutes et les peurs peuvent parfois s’inviter sans prévenir,
        transformant un moment censé être de plaisir et de connexion en une source de stress
        intense. L’anxiété de performance, ce trouble qui touche de nombreuses personnes, n’est pas
        une fatalité. Avec des stratégies adaptées et une meilleure compréhension de soi, il est
        tout à fait possible de retrouver sérénité et assurance. Voici 5 astuces pratiques pour
        surmonter cette anxiété et reprendre les rênes de votre confiance.
      </Text>

      <Space h="lg" />

      <Title order={2}>1. Identifier la source du problème : l’introspection avant tout</Title>
      <Text>
        Pourquoi ressentez-vous cette pression ? Est-ce la peur de décevoir ? Des expériences
        passées ? Ou encore des attentes irréalistes ? L’anxiété de performance est souvent
        alimentée par des pensées irrationnelles qui amplifient un simple doute en une montagne de
        stress.
      </Text>
      <Text>
        <strong>Notre conseil :</strong> Prenez le temps de mettre des mots sur vos craintes.
        Parlez-en à un proche ou à un professionnel si nécessaire. Reconnaître ce qui vous freine
        est la première étape pour avancer.
      </Text>

      <Space h="md" />

      <Title order={2}>2. Parler à son partenaire : l’importance d’une communication sincère</Title>
      <Text>
        Trop souvent, on oublie que la sexualité est un dialogue à deux. Si vous êtes rongé par
        l’idée de ne pas être à la hauteur, votre partenaire pourrait tout simplement ne pas être au
        courant de ce que vous traversez.
      </Text>
      <Text>
        Une conversation honnête peut tout changer. Expliquez vos peurs, vos attentes et vos
        besoins. Vous serez surpris de constater combien un simple échange peut désamorcer une
        situation tendue et rétablir la complicité.
      </Text>

      <Space h="md" />

      <Title order={2}>3. Se recentrer grâce à la relaxation</Title>
      <Text>
        Le stress est un véritable ennemi de la performance, et apprendre à le maîtriser est
        crucial. Techniques de respiration, méditation, ou exercices de pleine conscience : ces
        pratiques aident à calmer l’esprit et à vous reconnecter avec le moment présent.
      </Text>
      <Text>Essayez cette technique simple :</Text>
      <List>
        <ListItem>Asseyez-vous dans un endroit calme.</ListItem>
        <ListItem>Inspirez profondément en comptant jusqu’à 4.</ListItem>
        <ListItem>Retenez votre souffle pendant 4 secondes.</ListItem>
        <ListItem>Expirez lentement sur 6 secondes.</ListItem>
        <ListItem>
          Répétez ce cycle plusieurs fois pour apaiser vos tensions et retrouver un état de calme.
        </ListItem>
      </List>

      <Space h="md" />

      <Title order={2}>4. Adopter un mode de vie sain : la base d’une sérénité retrouvée</Title>
      <Text>
        Parfois, l’anxiété de performance trouve ses racines dans des facteurs physiques : fatigue,
        mauvaise alimentation, manque d’exercice. Prendre soin de son corps, c’est aussi prendre
        soin de son esprit.
      </Text>
      <Text>Quelques clés pour une meilleure hygiène de vie :</Text>
      <List>
        <ListItem>
          Misez sur des aliments riches en vitamines et minéraux : pensez aux noix, fruits, légumes
          et poissons gras.
        </ListItem>
        <ListItem>
          Intégrez une activité physique régulière, même douce, pour libérer des endorphines.
        </ListItem>
        <ListItem>
          Accordez-vous 7 à 8 heures de sommeil par nuit : un esprit reposé est un esprit plus
          confiant.
        </ListItem>
      </List>

      <Space h="md" />

      <Title order={2}>
        5. Changer de perspective : ce n’est pas une performance, c’est une connexion
      </Title>
      <Text>
        Une des causes majeures de l’anxiété de performance réside dans le mot même : "performance".
        Et si vous cessiez de voir vos moments intimes comme une épreuve à réussir ? Rappelez-vous
        que la sexualité est avant tout une question de partage, d’émotion et de complicité.
      </Text>
      <Text>
        <strong>Astuce pratique :</strong> Concentrez-vous sur les sensations, les caresses, les
        émotions, plutôt que sur un "objectif" à atteindre. Vous verrez, en oubliant la pression, le
        reste suivra naturellement.
      </Text>

      <Space h="md" />

      <Title order={3}>La clé : accepter l’imperfection</Title>
      <Text>
        En conclusion, surmonter l’anxiété de performance, ce n’est pas devenir parfait, mais
        accepter que l’intimité, comme la vie, comporte ses aléas. Chaque étape pour regagner votre
        confiance est une victoire en soi. N’oubliez jamais : vous n’êtes pas seul à traverser cela,
        et des solutions existent.
      </Text>
      <Text>
        <strong>Et vous ?</strong> Êtes-vous prêt à reprendre confiance en vous ? Il est temps de
        franchir le pas.
      </Text>
    </Container>
  ),
};
