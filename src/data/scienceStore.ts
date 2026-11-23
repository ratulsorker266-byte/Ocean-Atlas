import { KnowledgeStore } from '../types/knowledge';

export const scienceStore: KnowledgeStore = {
  id: 'science',
  title: 'Science & Natural Philosophy Store',
  tagline: 'Physics, Chemistry, Biology, Mathematics, Astronomy, Medicine, Earth & Marine Sciences.',
  description:
    'Explore the physical, chemical, biological, and mathematical laws governing matter, life, Earth, and the cosmos. Every topic scales from intuitive analogies for young learners to formal rigor for advanced scholars.',
  imagePath: '/src/assets/images/store_science_cosmos_1795350511763.jpg',
  imageAlt: 'Scientific plate showing prism light refraction, planetary orbits, and wave interference',
  accentHex: '#0284C7',
  accentTextClass: 'text-sky-700',
  accentBorderClass: 'border-sky-200',
  accentBgSoftClass: 'bg-sky-50',
  subjects: [
    {
      id: 'physics',
      storeId: 'science',
      name: 'Physics & Optics',
      scopeSummary: 'Motion, forces, energy, thermodynamics, electricity, magnetism, waves, and relativity.',
      recommendedLabId: 'wave',
      topics: [
        {
          id: 'physics-motion-laws',
          title: 'Newtonian Mechanics & Conservation of Momentum',
          subtitle: 'Why objects resist changes in motion and how collisions redistribute energy.',
          readMinutes: 7,
          corePrinciple: 'Net external force equals the rate of change of linear momentum.',
          formulaOrFramework: 'F_net = d(mv)/dt = m · a   |   p_total = Σ(m_i · v_i) = constant',
          levels: {
            explorer:
              'Imagine pushing an empty shopping cart versus one packed with heavy books. The heavy cart takes a stronger push to start moving and a stronger pull to stop! That stubbornness against changing speed or direction is called inertia. Whenever two objects bump into each other—like marbles on a floor—the total push-motion they carry together stays balanced.',
            student:
              'Newton’s First Law defines inertial frames: an object maintains constant velocity unless acted upon by a net external force. The Second Law quantifies acceleration as F = ma. The Third Law guarantees action-reaction pairs act on different bodies with equal magnitude and opposite direction, directly yielding Conservation of Momentum in isolated systems.',
            mastery:
              'In Lagrangian mechanics, equations of motion follow from extremizing the action S = ∫ L(q, q̇, t) dt via Euler-Lagrange equations. By Noether’s Theorem, conservation of linear momentum arises directly from spatial translation invariance of the Lagrangian.',
          },
          keyTakeaways: [
            'Action and reaction forces never cancel each other out because they act on two separate objects.',
            'Momentum (mv) is conserved in all isolated collisions, even inelastic ones.',
            'Mass measures translational inertia; moment of inertia measures rotational resistance.',
          ],
          realWorldApplication:
            'Automotive crumple zones extend collision duration Δt so the same impulse Δp produces a dramatically smaller peak force on passengers.',
          quiz: [
            {
              id: 'q-phys-1',
              prompt: 'If a car doubles its speed while maintaining constant mass, what happens to its kinetic energy?',
              options: ['It doubles', 'It quadruples (4x)', 'It stays the same', 'It increases by 8x'],
              correctIndex: 1,
              explanation: 'Kinetic energy is KE = 1/2 mv². Doubling velocity multiplies kinetic energy by 2² = 4.',
            },
          ],
        },
        {
          id: 'physics-waves-optics',
          title: 'Wave Interference, Refraction & Light Spectrum',
          subtitle: 'How light bends across media and why wave crests reinforce or cancel.',
          readMinutes: 6,
          corePrinciple: 'Waves superpose linearly and change phase velocity across optical boundaries.',
          formulaOrFramework: 'v = f · λ   |   n₁ sin(θ₁) = n₂ sin(θ₂)   |   Δx = (m · λ · L) / d',
          levels: {
            explorer:
              'Drop two pebbles into calm water side by side. Where two peaks meet, they build a taller splash; where a peak meets a dip, the water goes flat! Light acts like tiny ripples too. Inside a glass prism, violet ripples slow down slightly more than red ripples, fanning white light into a rainbow.',
            student:
              'Entering a higher refractive index n = c/v keeps frequency f fixed while decreasing speed v and wavelength λ, bending rays via Snell’s Law. In double-slit diffraction, integer-wavelength path differences create bright constructive fringes while half-integer shifts cancel destructively.',
            mastery:
              'Optical dispersion stems from frequency-dependent electric susceptibility χ(ω) near electronic resonances (Lorentz oscillator model), while interference visibility tracks the complex field’s spatial coherence governed by the Helmholtz equation (∇² + k²)E = 0.',
          },
          keyTakeaways: [
            'Frequency stays constant during refraction; speed and wavelength change proportionally.',
            'Path differences of mλ yield constructive peaks; (m + 1/2)λ yield dark nodes.',
            'Violet bends more strongly than red in crown glass because of optical dispersion.',
          ],
          realWorldApplication:
            'Noise-canceling headphones sample ambient sound and emit an inverted antiphase wave for destructive cancellation at the eardrum.',
          quiz: [
            {
              id: 'q-phys-3',
              prompt: 'When light enters glass from air, which wave property stays unchanged?',
              options: ['Speed', 'Wavelength', 'Frequency', 'Angle'],
              correctIndex: 2,
              explanation: 'Frequency is fixed by the light source; speed and wavelength decrease inside glass.',
            },
          ],
        },
        {
          id: 'physics-electricity',
          title: 'Electricity, Ohm’s Law & Electromagnetism',
          subtitle: 'How voltage pushes charge, why circuits heat up, and how moving magnets generate power.',
          readMinutes: 6,
          corePrinciple: 'Changing magnetic fields induce electric currents; potential difference drives current through resistance.',
          formulaOrFramework: 'V = I · R   |   P = V · I = I²R   |   ε = −dΦ_B / dt',
          levels: {
            explorer:
              'Picture water flowing through garden hoses. Voltage is the water pump pressure, Current is how fast water flows, and Resistance is a narrow squeeze in the hose! Even better: spinning a magnet near a coil of copper wire pushes electricity through the wire—that’s how wind turbines and power plants light whole cities!',
            student:
              'Ohm’s Law relates voltage V, current I, and resistance R (V = IR). Series circuits share the same current while parallel branches share voltage. Faraday’s Law states that a changing magnetic flux Φ_B induces an electromotive force ε opposing the change (Lenz’s Law).',
            mastery:
              'Maxwell’s four equations unify electrostatics, magnetostatics, and electromagnetic radiation (∇ × E = −∂B/∂t, ∇ × B = μ₀J + μ₀ε₀ ∂E/∂t), predicting transverse electromagnetic waves propagating in vacuum at c = 1/√(μ₀ε₀).',
          },
          keyTakeaways: [
            'High-voltage transmission lines minimize I²R heat losses across long distances.',
            'Every electric motor and generator relies on coupled electric and magnetic fields.',
            'Parallel household outlets let appliances turn off independently at constant voltage.',
          ],
          realWorldApplication:
            'Transformers step voltage up for cross-country power grids and step it safely back down before entering homes.',
          quiz: [
            {
              id: 'q-phys-elec',
              prompt: 'Why do national power grids transmit electricity at very high voltage over long distances?',
              options: [
                'To increase current inside thin cables',
                'Because higher voltage allows lower current for the same power, slashing I²R heat loss',
                'To turn AC into static electricity',
                'Because high voltage travels faster than light',
              ],
              correctIndex: 1,
              explanation: 'Since P = VI and wire heating is I²R, raising V lowers I and reduces wasted heat quadratically.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-phys-orbit',
          subjectId: 'physics',
          category: 'Conceptual',
          question: 'If astronauts inside the Space Station float weightlessly, is Earth’s gravity zero up there?',
          shortAnswer: 'No—Earth’s gravity at orbital altitude (~400 km) is still roughly 89% as strong as on the surface.',
          detailedExplanation: {
            explorer:
              'Imagine riding an elevator whose cable snaps—both you and the elevator fall together, so your feet float! The Space Station constantly falls toward Earth, yet moves sideways so fast (~28,000 km/h) that Earth curves away underneath it at the exact same pace.',
            student:
              'At 400 km altitude, g = GM/(R+h)² ≈ 8.7 m/s² (vs 9.8 m/s² on Earth). Astronauts feel weightless because both station and body undergo identical centripetal free-fall acceleration, leaving zero normal support force.',
            mastery:
              'An orbiting spacecraft follows a spacetime geodesic; local proper acceleration registered by an accelerometer vanishes because gravity acts uniformly across every mass element in the locally inertial frame.',
          },
          stepByStep: [
            'Add Earth radius (6,371 km) + altitude (400 km) = 6,771 km.',
            'Apply inverse-square ratio: (6371 / 6771)² ≈ 0.885 (~88.5% surface gravity).',
            'Match orbital speed v = √(GM/r) ≈ 7.67 km/s for continuous circular free-fall.',
          ],
          commonMisconception: 'Space does not begin where gravity stops; gravity reaches across the universe and holds the Moon in orbit.',
        },
        {
          id: 'qa-phys-momentum',
          subjectId: 'physics',
          category: 'Quantitative',
          question: 'A 2 kg trolley moving at 6 m/s sticks to a stationary 4 kg trolley. What is their final velocity and energy lost?',
          shortAnswer: 'Final velocity is 2 m/s; 24 J of kinetic energy converts into heat and sound.',
          detailedExplanation: {
            explorer:
              'Before bumping, only the 2 kg cart moves. Once locked together, total mass triples to 6 kg—so to keep the same total motion, they slow to one-third speed: 2 m/s.',
            student:
              'Momentum conservation gives (2)(6) + 0 = (2+4)v_f → v_f = 2 m/s. Initial KE = 0.5(2)(36) = 36 J; Final KE = 0.5(6)(4) = 12 J; 24 J converts to heat/sound.',
            mastery:
              'In the center-of-mass frame, relative kinetic energy K_rel = 1/2 μ v_rel² with reduced mass μ = 4/3 kg equals 24 J, which is fully dissipated upon inelastic locking.',
          },
          stepByStep: [
            'Initial momentum p_i = 2 × 6 = 12 kg·m/s.',
            'Divide by combined mass 6 kg: v_f = 12 / 6 = 2 m/s.',
            'Compare KE_i (36 J) − KE_f (12 J) = 24 J dissipated.',
          ],
          commonMisconception: 'Kinetic energy is not conserved in sticking collisions; only momentum and total energy are conserved.',
        },
      ],
    },
    {
      id: 'chemistry',
      storeId: 'science',
      name: 'Chemistry & Matter',
      scopeSummary: 'Atomic orbitals, bonding, acids and bases, thermodynamics, and chemical kinetics.',
      topics: [
        {
          id: 'chem-bonding',
          title: 'Chemical Bonding & Molecular Polarity',
          subtitle: 'Why atoms share or transfer electrons and how shape governs polarity.',
          readMinutes: 6,
          corePrinciple: 'Atoms adopt lower-energy electron configurations via electrostatic attraction.',
          formulaOrFramework: 'ΔEN = |EN_A − EN_B|   |   ΔG = ΔH − TΔS',
          levels: {
            explorer:
              'Electrons are like toys two atoms want to hold. Sometimes one atom gives an electron away completely (ionic bond, like salt), and sometimes two atoms share electrons between them (covalent bond, like water). Oxygen tugs harder than hydrogen, turning water into a tiny magnet!',
            student:
              'Large electronegativity gaps (ΔEN > 1.7) form ionic crystal lattices; smaller gaps share electron pairs covalently. Bent geometries (water’s 104.5° VSEPR angle) prevent bond dipoles from canceling, enabling hydrogen bonding.',
            mastery:
              'Molecular Orbital theory builds delocalized wavefunctions Ψ_MO = c₁φ₁ ± c₂φ₂ via LCAO; bond order equals half the bonding-minus-antibonding electron count.',
          },
          keyTakeaways: [
            'Symmetric polar bonds can cancel into a nonpolar molecule (e.g., linear CO₂).',
            'Hydrogen bonding explains water’s unusually high boiling point.',
            'Ionic solids conduct only when molten or dissolved.',
          ],
          realWorldApplication:
            'Soap combines a polar water-loving head with a nonpolar oil-dissolving tail to lift grease.',
          quiz: [
            {
              id: 'q-chem-1',
              prompt: 'Why is CO₂ nonpolar despite having polar C=O bonds?',
              options: [
                'Carbon and oxygen share zero electrons',
                'Its 180° linear symmetry cancels the two opposing dipoles',
                'CO₂ is an ionic crystal',
                'Oxygen has zero electronegativity',
              ],
              correctIndex: 1,
              explanation: 'Equal and opposite bond dipoles along a straight line sum to zero net dipole.',
            },
          ],
        },
        {
          id: 'chem-acids-ph',
          title: 'Acids, Bases, pH Scale & Equilibrium',
          subtitle: 'Why lemon juice tastes sour, how antacids neutralize heartburn, and logarithmic pH.',
          readMinutes: 6,
          corePrinciple: 'pH measures hydrogen ion activity on a base-10 logarithmic scale.',
          formulaOrFramework: 'pH = −log₁₀[H⁺]   |   pH + pOH = 14 (at 25 °C)   |   HA + H₂O ⇌ H₃O⁺ + A⁻',
          levels: {
            explorer:
              'Scientists sort liquids on a 0-to-14 scale called pH. Sour things like lemons sit below 7 (acids). Slippery soaps and baking soda sit above 7 (bases). Pure water sits right in the peaceful middle at 7! Each step on the scale is 10 times stronger than the next.',
            student:
              'Brønsted-Lowry acids donate protons (H⁺) and bases accept them. Because pH = −log₁₀[H⁺], dropping from pH 5 to pH 3 means hydrogen ion concentration jumped 100-fold. Buffer systems resist pH swings by pairing weak acids with their conjugate bases.',
            mastery:
              'The Henderson-Hasselbalch relation pH = pK_a + log([A⁻]/[HA]) governs physiological buffering—chiefly the blood bicarbonate equilibrium CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ maintained tightly near pH 7.35–7.45.',
          },
          keyTakeaways: [
            'A 1-unit drop in pH means 10× higher H⁺ concentration.',
            'Strong acids dissociate completely; weak acids establish dynamic equilibrium.',
            'Blood buffers protect enzymes from lethal pH swings.',
          ],
          realWorldApplication:
            'Farmers test soil pH and add agricultural lime (calcium carbonate) to neutralize overly acidic fields.',
          quiz: [
            {
              id: 'q-chem-2',
              prompt: 'How many times more acidic (higher [H⁺]) is a solution at pH 3 compared to pH 6?',
              options: ['2×', '3×', '100×', '1,000×'],
              correctIndex: 3,
              explanation: 'Each pH step represents a factor of 10, so 3 steps equals 10³ = 1,000×.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-chem-ice',
          subjectId: 'chemistry',
          category: 'Analytical',
          question: 'Why does solid ice float on liquid water when almost every other solid sinks in its own liquid?',
          shortAnswer: 'Directional hydrogen bonds lock ice into an open hexagonal lattice ~9% less dense than liquid water.',
          detailedExplanation: {
            explorer:
              'Most liquids shrink tightly when frozen. Water molecules freeze holding hands in wide six-sided rings with empty space inside—making ice lighter per cup so fish survive under frozen lakes!',
            student:
              'Below 0 °C, each water molecule forms four rigid tetrahedral hydrogen bonds, forming an open crystal lattice (0.917 g/cm³ vs liquid 1.00 g/cm³).',
            mastery:
              'Because ΔV_fus < 0, the Clausius-Clapeyron slope dP/dT is negative, lowering melting temperature under elevated pressure.',
          },
          stepByStep: [
            'Observe bent H-O-H polarity and lone electron pairs.',
            'Compare transient liquid clustering vs rigid tetrahedral crystal spacing.',
            'Confirm lower mass per unit volume makes ice buoyant.',
          ],
          commonMisconception: 'Air bubbles are not needed for ice to float; pure vacuum-frozen ice still floats.',
        },
      ],
    },
    {
      id: 'biology',
      storeId: 'science',
      name: 'Biology & Genetics',
      scopeSummary: 'Cells, photosynthesis, DNA replication, evolution, and biodiversity.',
      topics: [
        {
          id: 'bio-dna-central',
          title: 'DNA, Transcription & Protein Synthesis',
          subtitle: 'How four chemical bases encode every enzyme, tissue, and inherited trait.',
          readMinutes: 7,
          corePrinciple: 'Genetic information flows from DNA to mRNA to folded functional proteins.',
          formulaOrFramework: 'DNA (A-T, G-C)  →  mRNA (A-U, G-C)  →  Polypeptide Chain',
          levels: {
            explorer:
              'Inside almost every cell sits an instruction book called DNA written in four letters: A, T, C, and G. Cells copy one recipe onto a short note (mRNA) and send it to tiny protein kitchens called ribosomes.',
            student:
              'RNA polymerase transcribes template DNA into complementary mRNA; ribosomes translate 3-base codons via tRNA anticodons into amino acid chains that fold into active 3D proteins.',
            mastery:
              'Gene expression integrates chromatin remodeling, enhancer looping, alternative splicing, and third-position codon wobble buffering.',
          },
          keyTakeaways: [
            'mRNA carries disposable copies while master DNA stays protected in the nucleus.',
            'Three-dimensional folding determines protein function.',
            'Regulatory DNA controls timing and tissue specificity.',
          ],
          realWorldApplication:
            'mRNA vaccines instruct cells briefly to display harmless viral spike shapes to train immunity safely.',
          quiz: [
            {
              id: 'q-bio-1',
              prompt: 'Which RNA base pairs with DNA Adenine (A) during transcription?',
              options: ['Thymine', 'Uracil', 'Cytosine', 'Guanine'],
              correctIndex: 1,
              explanation: 'RNA uses Uracil (U) in place of Thymine (T).',
            },
          ],
        },
        {
          id: 'bio-evolution',
          title: 'Natural Selection, Adaptation & Speciation',
          subtitle: 'How variation, inheritance, and differential survival shape life over deep time.',
          readMinutes: 6,
          corePrinciple: 'Heritable traits improving survival and reproduction accumulate across generations.',
          formulaOrFramework: 'Heritable Variation + Selection Pressure + Time  →  Adaptation',
          levels: {
            explorer:
              'Imagine beetles living on dark tree bark: some happen to be born dark brown and some bright yellow. Hungry birds spot the bright yellow beetles first! Over many summers, more dark beetles grow up and pass dark shells to their babies, naturally camouflaging the group.',
            student:
              'Natural selection acts on existing heritable variation within populations—not individual willpower. When environmental pressures favor certain alleles, allele frequencies shift over generations (microevolution), and geographic isolation can split one lineage into distinct species.',
            mastery:
              'The Modern Synthesis integrates Mendelian genetics with population dynamics (Hardy-Weinberg equilibrium deviations via selection, genetic drift, gene flow, and mutation), while phylogenomics reconstructs shared ancestry from conserved sequence homology.',
          },
          keyTakeaways: [
            'Populations evolve over generations; individual organisms do not change their DNA on demand.',
            'Antibiotic overuse rapidly selects for resistant bacteria through natural selection.',
            'Genetic diversity shields species against sudden disease or climate shocks.',
          ],
          realWorldApplication:
            'Public health teams track viral mutations phylogenetically to update seasonal flu vaccines ahead of outbreaks.',
          quiz: [
            {
              id: 'q-bio-2',
              prompt: 'Why do doctors urge patients to finish prescribed antibiotics properly and avoid them for viral colds?',
              options: [
                'To make bacteria grow faster',
                'Because misuse kills weak bacteria while leaving resistant mutants to multiply via natural selection',
                'Because antibiotics expire in one hour',
                'Because viruses turn into bacteria',
              ],
              correctIndex: 1,
              explanation: 'Surviving resistant bacteria pass resistance genes onward when antibiotics are misused.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-bio-photosynthesis',
          subjectId: 'biology',
          category: 'Conceptual',
          question: 'Where does most of the dry mass of a giant oak tree come from—soil, water, or air?',
          shortAnswer: 'Mostly from carbon dioxide (CO₂) gas in the air, fixed during photosynthesis.',
          detailedExplanation: {
            explorer:
              'Leaves breathe in invisible carbon dioxide from the air and use sunlight to stitch that carbon into solid wood—hardly any dirt disappears!',
            student:
              'RuBisCO fixes atmospheric CO₂ in the Calvin Cycle into sugar chains that polymerize into cellulose and lignin.',
            mastery:
              'Roughly 45–50% of dry biomass is atmospheric carbon fixed via C₃ pathways, while soil supplies <5% mineral ions.',
          },
          stepByStep: [
            'Light reactions split H₂O for ATP/NADPH.',
            'Calvin Cycle turns gaseous CO₂ into solid cellulose.',
            'Soil supplies water and trace minerals, not bulk carbon.',
          ],
          commonMisconception: 'Soil does not convert directly into tree wood.',
        },
      ],
    },
    {
      id: 'mathematics',
      storeId: 'science',
      name: 'Mathematics & Calculus',
      scopeSummary: 'Arithmetic, algebra, geometry, probability, linear algebra, and calculus.',
      recommendedLabId: 'growth',
      topics: [
        {
          id: 'math-calculus-rates',
          title: 'Derivatives, Integrals & The Fundamental Theorem',
          subtitle: 'Measuring instantaneous change and accumulating continuous quantities.',
          readMinutes: 8,
          corePrinciple: 'Differentiation and integration are inverse operations linking rate to net accumulation.',
          formulaOrFramework: 'f′(x) = lim(h→0) [f(x+h) − f(x)] / h   |   ∫ₐᵇ f′(x) dx = f(b) − f(a)',
          levels: {
            explorer:
              'Your car’s odometer measures total distance traveled, while the speedometer tells how fast you move right this instant. Calculus lets you find speedometer speed from a distance map—or total distance from your speed!',
            student:
              'The derivative gives instantaneous tangent slope; the definite integral sums infinitely thin slices for area and total change.',
            mastery:
              'Stokes’ generalized theorem ∫_∂Ω ω = ∫_Ω dω unifies the Fundamental Theorem with Green’s and Gauss’s theorems across manifolds.',
          },
          keyTakeaways: [
            'Zero derivatives locate maxima and minima for optimization.',
            'Velocity is the derivative of position; acceleration is the second derivative.',
            'Integrals compute area, work, volume, and continuous probability.',
          ],
          realWorldApplication:
            'Machine learning optimizes neural weights by following multivariable derivative gradients.',
          quiz: [
            {
              id: 'q-math-1',
              prompt: 'If position is s(t) = 3t² + 2t, what is velocity at t = 4 s?',
              options: ['14 m/s', '24 m/s', '26 m/s', '56 m/s'],
              correctIndex: 2,
              explanation: 'v(t) = 6t + 2 → 6(4) + 2 = 26 m/s.',
            },
          ],
        },
        {
          id: 'math-geometry-pythagoras',
          title: 'Pythagorean Geometry, Pi & Spatial Proof',
          subtitle: 'Why right triangles obey a² + b² = c² and how ancient surveyors measured Earth.',
          readMinutes: 6,
          corePrinciple: 'Euclidean distance and circular ratios remain invariant across scale.',
          formulaOrFramework: 'a² + b² = c²   |   C = 2πr   |   A = πr²   |   Sum of Triangle Angles = 180°',
          levels: {
            explorer:
              'Draw any square-cornered triangle, and build squares on each of its three sides. The two smaller squares cut apart fit perfectly inside the biggest square! That magic shortcut lets builders make straight room corners with just a knotted rope of lengths 3, 4, and 5.',
            student:
              'Pythagoras’s Theorem connects perpendicular axes into straight-line Euclidean distance d = √(Δx² + Δy²). Similarly, π ≈ 3.14159 expresses the exact ratio of any circle’s circumference to its diameter regardless of size.',
            mastery:
              'Euclidean metrics generalize to n-dimensional inner-product spaces ‖u + v‖² = ‖u‖² + ‖v‖² (orthogonal vectors), whereas non-Euclidean spherical or hyperbolic geometries alter parallel postulates and triangle angle sums.',
          },
          keyTakeaways: [
            'A 3-4-5 triangle always forms an exact 90° right angle.',
            'Pi is irrational—its decimal expansion never terminates or repeats.',
            'Geometric proofs establish universal truth for every triangle, not just one measured drawing.',
          ],
          realWorldApplication:
            'GPS satellites, 3D video games, and bridge trusses calculate millions of Pythagorean distances every second.',
          quiz: [
            {
              id: 'q-math-2',
              prompt: 'A ladder leans 6 m from a wall and reaches 8 m high. How long is the ladder?',
              options: ['10 m', '12 m', '14 m', '48 m'],
              correctIndex: 0,
              explanation: '√(6² + 8²) = √(36 + 64) = √100 = 10 m.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-math-zero-div',
          subjectId: 'mathematics',
          category: 'Analytical',
          question: 'Why is dividing any number by zero undefined rather than infinity?',
          shortAnswer: 'Division is the unique inverse of multiplication, and no number times 0 yields a non-zero dividend.',
          detailedExplanation: {
            explorer:
              'Sharing 6 cookies among 0 friends asks "what times 0 equals 6?"—no such number exists!',
            student:
              'If a/0 = c, then 0·c = a fails for a ≠ 0 and lacks uniqueness for a = 0; left and right limits of 1/x also diverge to −∞ and +∞.',
            mastery:
              'Field axioms forbid a multiplicative inverse for the additive identity 0 without collapsing the ring to {0}.',
          },
          stepByStep: [
            'Rewrite a/0 = x as 0·x = a.',
            'Check non-zero a: impossible.',
            'Check a = 0: every x satisfies 0·x = 0, breaking uniqueness.',
          ],
          commonMisconception: '1/0 is undefined in ℝ, not equal to +∞.',
        },
      ],
    },
    {
      id: 'astronomy',
      storeId: 'science',
      name: 'Astronomy & Space Science',
      scopeSummary: 'Planetary seasons, gravity, stars, exoplanets, black holes, and cosmology.',
      topics: [
        {
          id: 'astro-seasons',
          title: 'Axial Tilt, Orbits & Planetary Seasons',
          subtitle: 'Why winter and summer depend on Earth’s 23.4° tilt rather than Sun distance.',
          readMinutes: 5,
          corePrinciple: 'Solar irradiance scales with the cosine of incidence angle.',
          formulaOrFramework: 'I_surface = I_0 · cos(θ)   |   Axial Tilt ε ≈ 23.44°',
          levels: {
            explorer:
              'Shine a flashlight straight down—bright concentrated spot! Tilt it sideways—the light spreads thin. Earth tilts like a spinning top, warming whichever half leans toward the Sun.',
            student:
              'Earth is closest to the Sun in January! Seasons happen because Earth’s 23.4° axial tilt changes both day length and sunlight angle.',
            mastery:
              'Milankovitch cycles combine axial precession, obliquity, and eccentricity oscillations to pace Quaternary glaciation epochs.',
          },
          keyTakeaways: [
            'Northern and Southern Hemispheres always have opposite seasons.',
            'Distance is not why July is hot in the North.',
            'Equatorial regions stay warm year-round.',
          ],
          realWorldApplication: 'Rooftop solar arrays tilt toward the Sun at local latitude angle.',
          quiz: [
            {
              id: 'q-astro-1',
              prompt: 'When it is July summer in Europe, what season is it in Australia?',
              options: ['Summer', 'Spring', 'Winter', 'Autumn'],
              correctIndex: 2,
              explanation: 'The Southern Hemisphere tilts away from the Sun in July, experiencing winter.',
            },
          ],
        },
        {
          id: 'astro-stars',
          title: 'Star Lifecycles, Supernovae & Cosmic Elements',
          subtitle: 'How hydrogen fusion powers stars and forges iron, gold, and carbon inside our bodies.',
          readMinutes: 6,
          corePrinciple: 'Stars balance inward gravitational collapse against outward nuclear fusion pressure.',
          formulaOrFramework: '4 ¹H → ⁴He + Energy (E = Δm·c²)   |   Mass Determines Stellar Fate',
          levels: {
            explorer:
              'Stars are giant glowing balls of gas squeezing hydrogen atoms together so hard they turn into helium and shine for billions of years! When huge stars run out of fuel and explode, they scatter calcium, iron, and gold into space—meaning every atom of iron in your blood was once cooked inside an ancient star!',
            student:
              'Main-sequence stars sustain hydrostatic equilibrium by fusing hydrogen into helium. Sun-sized stars expand into red giants and leave white dwarfs; massive stars (>8 solar masses) fuse heavier elements up to iron before collapsing in Type II supernovae into neutron stars or black holes.',
            mastery:
              'Electron degeneracy pressure (Chandrasekhar limit ≈ 1.44 M_☉) supports white dwarfs, while core-collapse supernovae and neutron-star mergers drive rapid neutron capture (r-process) nucleosynthesis of heavy elements beyond iron.',
          },
          keyTakeaways: [
            'Mass determines how fast a star burns fuel—massive blue stars live millions of years, red dwarfs trillions.',
            'Light from distant galaxies shows us how the universe looked billions of years ago.',
            'Every element heavier than helium was forged inside stars or stellar collisions.',
          ],
          realWorldApplication:
            'Spectroscopy splits starlight into barcode absorption lines so astronomers know a distant exoplanet’s atmosphere from light-years away.',
          quiz: [
            {
              id: 'q-astro-2',
              prompt: 'What single factor mainly determines whether a star ends as a white dwarf or explodes as a supernova?',
              options: ['Its distance from Earth', 'Its initial mass', 'Its rotation speed alone', 'Its number of moons'],
              correctIndex: 1,
              explanation: 'Initial mass governs core pressure, fusion stages, and whether the core exceeds the Chandrasekhar collapse threshold.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-astro-sky',
          subjectId: 'astronomy',
          category: 'Conceptual',
          question: 'Why is the daytime sky blue while sunsets turn fiery orange and red?',
          shortAnswer: 'Atmospheric gas molecules scatter short blue wavelengths ~10x more strongly than red light (Rayleigh scattering).',
          detailedExplanation: {
            explorer:
              'Air bounces short bouncy blue waves all across the daytime sky; at sunset light crosses thicker air, losing blue and leaving warm red/orange.',
            student:
              'Rayleigh scattering intensity scales as 1/λ⁴, scattering short blue wavelengths overhead while transmitting long red wavelengths at low solar angles.',
            mastery:
              'Oscillating molecular dipoles radiate with cross-section σ_R ∝ ω⁴, weighted by solar spectrum and human cone peak sensitivity near 445 nm.',
          },
          stepByStep: [
            'Compare wavelength ratios: red ~650 nm vs blue ~450 nm.',
            'Apply (λ_red / λ_blue)⁴ scattering advantage.',
            'Trace oblique path depletion at sunset.',
          ],
          commonMisconception: 'The sky does not turn blue by reflecting the ocean.',
        },
      ],
    },
    {
      id: 'medicine',
      storeId: 'science',
      name: 'Human Anatomy & Medicine',
      scopeSummary: 'Immune defense, cardiovascular system, nervous system, nutrition, and public health.',
      topics: [
        {
          id: 'med-immune',
          title: 'Innate vs. Adaptive Immune Defense',
          subtitle: 'How the body distinguishes self from pathogens and builds lifelong memory.',
          readMinutes: 6,
          corePrinciple: 'Fast general barriers buy time for precision antigen-specific lymphocytes.',
          formulaOrFramework: 'Barrier → Innate Phagocytes → Antigen Presentation → B & T Cell Memory',
          levels: {
            explorer:
              'Your body uses two teams: instant guards (skin, sneezes, white blood cells) and smart detectives (B and T cells) who remember old germs for years.',
            student:
              'Innate barriers react immediately; adaptive B and T lymphocytes generate targeted antibodies and cellular memory after antigen presentation.',
            mastery:
              'V(D)J recombination, MHC restriction, and germinal-center somatic hypermutation produce high-affinity humoral and cell-mediated immunity.',
          },
          keyTakeaways: [
            'Antibiotics target bacteria and have zero effect on viruses.',
            'Fever slows pathogen replication and accelerates immune signaling.',
            'Memory lymphocytes respond rapidly upon re-exposure.',
          ],
          realWorldApplication: 'Understanding bacterial vs viral causes prevents dangerous antibiotic misuse.',
          quiz: [
            {
              id: 'q-med-1',
              prompt: 'Why don’t antibiotics cure the common cold?',
              options: [
                'Colds happen only in winter',
                'Antibiotics target bacterial structures that viruses lack',
                'Viruses live outside blood',
                'Antibiotics evaporate quickly',
              ],
              correctIndex: 1,
              explanation: 'Antibiotics disrupt bacterial cell walls or ribosomes, which viruses do not have.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-med-oxygen',
          subjectId: 'medicine',
          category: 'Analytical',
          question: 'How does active muscle tissue automatically draw extra oxygen from blood?',
          shortAnswer: 'Heat, CO₂, and acid from working muscles shift hemoglobin to unload oxygen (the Bohr Effect).',
          detailedExplanation: {
            explorer:
              'Warm, hard-working muscles signal passing red blood cells to drop off extra oxygen right where it is needed.',
            student:
              'Elevated CO₂ and lowered pH stabilize deoxyhemoglobin, shifting the O₂ dissociation curve rightward.',
            mastery:
              'Protonation of His146 and 2,3-BPG binding increase P₅₀ without requiring central nervous intervention.',
          },
          stepByStep: [
            'Muscle respiration raises CO₂ and lowers local pH.',
            'Hemoglobin shifts from R-state to T-state.',
            'Extra O₂ unloads into active capillary beds.',
          ],
          commonMisconception: 'Heart rate speeds delivery, while the Bohr Effect directs selective capillary unloading.',
        },
      ],
    },
    {
      id: 'earth-science',
      storeId: 'science',
      name: 'Earth Science & Meteorology',
      scopeSummary: 'Plate tectonics, rock cycle, earthquakes, monsoons, and atmospheric systems.',
      topics: [
        {
          id: 'earth-tectonics',
          title: 'Plate Tectonics, Earthquakes & Weather Systems',
          subtitle: 'How slowly drifting continents build mountains, trigger quakes, and shape monsoons.',
          readMinutes: 6,
          corePrinciple: 'Mantle convection drives lithospheric plates while solar heating drives atmospheric circulation.',
          formulaOrFramework: 'Mantle Heat Convection → Plate Motion (cm/yr)  |  Uneven Solar Heating → Wind & Rain',
          levels: {
            explorer:
              'Earth’s outer rocky shell isn’t one solid eggshell—it is cracked into giant puzzle pieces floating slowly on hot rock beneath! Where two plates bump slowly together, they push up towering mountains like the Himalayas. Meanwhile, warm air rising off heated oceans brings seasonal monsoon rains.',
            student:
              'Lithospheric plates move 2–10 cm/year across divergent rifts, convergent subduction zones, and transform faults. Earthquakes release accumulated elastic strain along locked faults. In meteorology, differential heating between land and ocean drives pressure gradients and Coriolis-deflected monsoon winds.',
            mastery:
              'Slab-pull and ridge-push forces dominate plate kinematics, while seismic P-wave and S-wave velocity tomography resolves Earth’s liquid outer core and mantle plumes. Synoptic weather forecasting integrates Navier-Stokes fluid equations across pressure-altitude grids.',
          },
          keyTakeaways: [
            'The Himalayas continue rising several millimeters each year as the Indian and Eurasian plates converge.',
            'Warm air holds ~7% more moisture per 1 °C temperature rise (Clausius-Clapeyron relation).',
            'Floodplains and deltas remain fertile because rivers deposit mineral-rich sediment.',
          ],
          realWorldApplication:
            'Seismic building codes use base isolation and ductile steel frames so hospitals stay standing during earthquakes.',
          quiz: [
            {
              id: 'q-earth-1',
              prompt: 'How did the Himalayan mountain range form?',
              options: [
                'Ancient ocean tides piled sand upward',
                'Collision of the Indian and Eurasian tectonic plates folded continental crust upward',
                'A single volcano erupted once',
                'Wind erosion carved flat land downward',
              ],
              correctIndex: 1,
              explanation: 'Continental-continental convergence folded thick crust upward into the Himalayas.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-earth-monsoon',
          subjectId: 'earth-science',
          category: 'Conceptual',
          question: 'Why do South Asian summer monsoons blow moist air from the ocean onto land?',
          shortAnswer: 'Land heats up faster than ocean water in summer, creating rising warm low-pressure air that pulls humid ocean breezes inward.',
          detailedExplanation: {
            explorer:
              'On a sunny beach, sand gets hot fast while the sea stays cool! In summer, giant stretches of warm land pull cool, rain-filled ocean air inward like a huge natural fan.',
            student:
              'Water has a much higher specific heat capacity than rock and soil. As spring/summer sun warms Asian landmasses rapidly, warm air rises, creating continental low pressure that draws moisture-laden winds off the cooler Indian Ocean.',
            mastery:
              'Seasonal migration of the Intertropical Convergence Zone (ITCZ) coupled with Tibetan Plateau sensible heating and latent heat release amplifies the cross-equatorial pressure gradient.',
          },
          stepByStep: [
            'Compare specific heat of land (low) vs ocean (high).',
            'Warm rising air over land lowers surface air pressure.',
            'Moist ocean air flows inland and condenses as it rises over hills.',
          ],
          commonMisconception: 'Monsoon means a seasonal wind reversal, not simply "heavy rainstorm."',
        },
      ],
    },
    {
      id: 'marine-env',
      storeId: 'science',
      name: 'Oceanography & Environmental Science',
      scopeSummary: 'Ocean currents, coral reefs, carbon cycle, freshwater systems, and biodiversity.',
      topics: [
        {
          id: 'marine-currents',
          title: 'Ocean Currents, Carbon Sinks & Marine Food Webs',
          subtitle: 'How the ocean regulates Earth’s temperature and produces half of our oxygen.',
          readMinutes: 6,
          corePrinciple: 'Thermohaline circulation redistributes planetary heat while marine plankton anchor global carbon and oxygen cycles.',
          formulaOrFramework: 'Wind + Salinity + Temperature Density  →  Global Ocean Conveyor Belt',
          levels: {
            explorer:
              'Did you know every second breath of oxygen you take comes from tiny floating ocean plants called phytoplankton? Huge underwater rivers—ocean currents—carry warm water away from the equator so coastal cities don’t freeze or overheat!',
            student:
              'Surface ocean currents are steered by prevailing winds and Earth’s rotation (Coriolis effect), while deep currents sink when cold, salty polar water becomes dense. Oceans absorb over 90% of excess planetary heat and roughly a quarter of emitted CO₂—making ocean acidification a threat to shelled marine life.',
            mastery:
              'Atlantic Meridional Overturning Circulation (AMOC) couples heat transport with abyssal ventilation. Dissolved CO₂ forms carbonic acid, reducing carbonate ion [CO₃²⁻] saturation (Ω_aragonite) essential for calcifying corals and pteropods.',
          },
          keyTakeaways: [
            'Microscopic marine phytoplankton generate roughly 50% of Earth’s oxygen.',
            'Mangrove forests protect coastlines from storm surges and shelter juvenile fish.',
            'Warming and acidification interact to stress coral reef symbiosis.',
          ],
          realWorldApplication:
            'Coastal Sundarbans mangroves act as living sea walls, reducing cyclone wave energy and storing dense blue carbon.',
          quiz: [
            {
              id: 'q-marine-1',
              prompt: 'What drives deep-ocean thermohaline currents around the planet?',
              options: [
                'Whale swimming patterns',
                'Differences in water density caused by temperature and salinity',
                'Moonlight reflection',
                'Cargo ships',
              ],
              correctIndex: 1,
              explanation: 'Cold, salty water is denser and sinks at high latitudes, driving global deep circulation.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-marine-salty',
          subjectId: 'marine-env',
          category: 'Conceptual',
          question: 'Why are the oceans salty while rivers flowing into them taste fresh?',
          shortAnswer: 'Rivers carry tiny dissolved mineral ions from rocks into oceans; evaporation lifts pure water vapor back out, leaving salts behind over millions of years.',
          detailedExplanation: {
            explorer:
              'Rain washes tiny pinches of salt out of rocks into rivers—too small to taste! When sunshine evaporates ocean water into clouds, the salt gets left behind in the sea, building up slowly over millions of years.',
            student:
              'Slightly acidic rainwater weathers mineral ions (Na⁺, Cl⁻) out of continental rocks in trace amounts. Rivers deliver them to oceans; solar evaporation removes pure H₂O while mineral salts remain until balanced by geological seafloor uptake.',
            mastery:
              'Ocean salinity (~35 PSU) sits in steady-state equilibrium where riverine weathering flux and hydrothermal vent exchange balance evaporite precipitation and subduction sediment burial.',
          },
          stepByStep: [
            'Trace chemical weathering of continental crust by rainwater.',
            'Note evaporation removes H₂O vapor only, concentrating dissolved ions in ocean basins.',
          ],
          commonMisconception: 'The ocean is not getting saltier forever; geological sinks balance river inputs.',
        },
      ],
    },
  ],
};
