const essences = [
    {
        name:"Sin",
        rank:"bronze",
        awakeningStones:["Apocalypse"],
        description:`Familiar (ritual, summon).
        Base Cost: Extreme mana, extreme stamina, extreme health.
        Cooldown: None.
        
        Effect (iron): Summon a [Sanguine Horror] to serve as a familiar.
        
        Bites from the leech swarm inflict [Bleeding], [Leech Toxin] and [Necrotoxin].
        [Bleeding] (affliction, wounding, blood): Deals ongoing damage by causing or increasing blood loss. As a wounding effect, this condition absorbs and negates an amount of incoming healing, after which this affliction immediately ends.
        [Leech Toxin] (affliction, poison, blood, stacking): When [Bleeding] is negated, an instance of [Leech Toxin] on the target is consumed to reapply [Bleeding]. Additional instances can be accumulated.
        [Necrotoxin] (affliction, poison, stacking): Inflicts ongoing necrotic damage until the poison is cleansed. Additional instances have a cumulative effect.
        Leech attacks drain health and stamina, allowing the rapid replacement of destroyed biomass.
        While subsumed within the summoner, the summoner has accelerated healing and stamina recovery. Healing and recovery rate is determined by how much biomass was absorbed and increases with the summoner’s level of injury.
        
        Effect (bronze): Summon a bronze rank vessel for your familiar with enhanced abilities.
        
        Ranged entangling attacks can be made using cloth strips. Grips inflict minimal constriction damage but periodically inflict [Leech Toxin] and [Necrotoxin] if an area with an open wound is grabbed or the target is suffering the [Bleeding] condition.
        
        Effect (silver): Summon a silver rank vessel for your familiar with enhanced abilities
        
        Item: [Sanguine Raiment] (silver rank, conjured)
        
        Conjured robes with the power and resilience of an apocalypse beast (armour, cloth/leather).
        Effect: Increased resistance to damage. Highly effective against cutting and piercing damage, less effective against blunt damage.
        Effect: Heal over time effects have increased strength and duration. This effect scales with the amount of familiar biomass being shared with the summoner and amplifies the passive healing the familiar provides.
        Effect: Drain abilities have increased effect. This effect scales with the amount of familiar biomass being shared with the summoner.
        Effect: Resistance to blood effects in significantly increased.
        Effect: Can be used to make ranged grapple attacks. Health is continually drained from grappled enemies.`,
        punish:"d4"
    },
    {
        name:"Darkness",
        rank:"bronze",
        awakeningStones:[],
        description:"A"
    },
    {
        name:"Blood",
        rank:"bronze",
        awakeningStones:["Decay"],
        description:"ex2"
    },
    {
        name:"Doom",
        rank:"bronze",
        awakeningStones:[],
        description:"C"
    }
];
export default essences