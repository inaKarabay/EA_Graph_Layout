export var graph1 = {
    nodes: [
      { name: "Anatomy" },
      { name: "Gene" },
      { name: "Chemical" },
      { name: "Disease" },
      { name: "VariantAnnotation", symbol: "diamond" },
      { name: "Phenotype" },
      { name: "ClinicalAnnotation", symbol: "diamond" },
      { name: "Pathway" },
      { name: "Symptom" },
      { name: "SideEffect" },
      { name: "Protein" },
      { name: "Interaction", symbol: "diamond" },
      { name: "PharmacologicClass" },
      { name: "Variant" },
      { name: "ReactionLikeEvent", symbol: "diamond" },
      { name: "Treatment", symbol: "diamond" },
      { name: "MolecularFunction" },
      { name: "BiologicalProcess" },
      { name: "CellularComponent" },
      { name: "Product" },
    ],
    edges: [
      { source: "Anatomy", target: "Gene" },
      { source: "Gene", target: "Gene" },
      { source: "Chemical", target: "Gene" },
      { source: "Disease", target: "Gene" },
      { source: "VariantAnnotation", target: "Gene" },
      { source: "Phenotype", target: "Gene" },
      { source: "ClinicalAnnotation", target: "Gene" },
      { source: "Gene", target: "Pathway" },
      { source: "Pathway", target: "Pathway" },
      { source: "Chemical", target: "Pathway" },
      { source: "Symptom", target: "SideEffect" },
      { source: "Chemical", target: "SideEffect" },
      { source: "Phenotype", target: "SideEffect" },
      { source: "Disease", target: "SideEffect" },
      { source: "ClinicalAnnotation", target: "SideEffect" },
      { source: "Chemical", target: "Protein" },
      { source: "Gene", target: "Protein" },
      { source: "Protein", target: "Protein" },
      { source: "Interaction", target: "Protein" },
      { source: "Chemical", target: "Chemical" },
      { source: "PharmacologicClass", target: "Chemical" },
      { source: "ClinicalAnnotation", target: "Chemical" },
      { source: "VariantAnnotation", target: "Chemical" },
      { source: "Variant", target: "Chemical" },
      { source: "ReactionLikeEvent", target: "Chemical" },
      { source: "Gene", target: "Chemical" },
      { source: "Protein", target: "Chemical" },
      { source: "Protein", target: "ReactionLikeEvent" },
      { source: "ReactionLikeEvent", target: "ReactionLikeEvent" },
      { source: "Pathway", target: "ReactionLikeEvent" },
      { source: "Gene", target: "Variant" },
      { source: "Variant", target: "Variant" },
      { source: "ClinicalAnnotation", target: "Variant" },
      { source: "VariantAnnotation", target: "Variant" },
      { source: "Disease", target: "Disease" },
      { source: "Chemical", target: "Disease" },
      { source: "ClinicalAnnotation", target: "Disease" },
      { source: "Treatment", target: "Disease" },
      { source: "ReactionLikeEvent", target: "Disease" },
      { source: "Pathway", target: "Disease" },
      { source: "PharmacologicClass", target: "Disease" },
      { source: "Gene", target: "MolecularFunction" },
      { source: "Protein", target: "MolecularFunction" },
      { source: "MolecularFunction", target: "MolecularFunction" },
      { source: "Chemical", target: "MolecularFunction" },
      { source: "Chemical", target: "BiologicalProcess" },
      { source: "Gene", target: "BiologicalProcess" },
      { source: "Protein", target: "BiologicalProcess" },
      { source: "BiologicalProcess", target: "BiologicalProcess" },
      { source: "Pathway", target: "BiologicalProcess" },
      { source: "ReactionLikeEvent", target: "BiologicalProcess" },
      { source: "Gene", target: "CellularComponent" },
      { source: "Protein", target: "CellularComponent" },
      { source: "CellularComponent", target: "CellularComponent" },
      { source: "Pathway", target: "CellularComponent" },
      { source: "ReactionLikeEvent", target: "CellularComponent" },
      { source: "Chemical", target: "CellularComponent" },
      { source: "Treatment", target: "CellularComponent" },
      { source: "Interaction", target: "CellularComponent" },
      { source: "Protein", target: "Interaction" },
      { source: "Chemical", target: "Product" },
      { source: "Disease", target: "Symptom" },
      { source: "Symptom", target: "Symptom" },
      { source: "ClinicalAnnotation", target: "Symptom" },
      { source: "PharmacologicClass", target: "PharmacologicClass" },
      { source: "Chemical", target: "PharmacologicClass" },
      { source: "ClinicalAnnotation", target: "PharmacologicClass" },
      { source: "VariantAnnotation", target: "PharmacologicClass" },
      { source: "ClinicalAnnotation", target: "VariantAnnotation" },
      { source: "ReactionLikeEvent", target: "Pathway" },
      { source: "Chemical", target: "Treatment" },
      { source: "Disease", target: "Anatomy" },
      { source: "ClinicalAnnotation", target: "Phenotype" },
    ]
  };
  
  export var graph2 = {
      categories: [{
      name: 'BioPub'
    }, {
      name: 'Dataset'
    }, {
      name: 'Tool'
    }, {
      name: 'Operation'
    }],
    nodes: [
      {
        category: 0,
        id: 'bp_1',
        name: 'Prioritization and comprehensive analysis of genes associated with melanoma.',
        value: 1,
        symbolSize: 10
      },
      {
        category: 0,
        id: 'bp_2',
        name: 'Glioblastoma gene network reconstruction and ontology analysis by online bioinformatics tools.',
        value: 1,
        symbolSize: 10
      },
      {
        category: 0,
        id: 'bp_3',
        name: 'Comorbidity of asthma and hypertension may be mediated by shared genetic dysregulation and drug side effects.',
        value: 1,
        symbolSize: 10
      },
      {
        category: 0,
        id: 'bp_4',
        name: 'Prediction of hub genes of Alzheimer\'s disease using a protein interaction network and functional enrichment analysis.',
        value: 1,
        symbolSize: 10
      },
      {
        category: 0,
        id: 'bp_5',
        name: 'Consensus strategy in genes prioritization and combined bioinformatics analysis for preeclampsia pathogenesis.',
        value: 1,
        symbolSize: 10
      },
      {
        category: 0,
        id: 'bp_6',
        name: 'Network-based drug repurposing for novel coronavirus 2019-nCoV/SARS-CoV-2.',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_7',
        name: 'Bioinformatics approaches in the study of cancer.',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_8',
        name: 'Gene Prioritization through Consensus Strategy, Enrichment Methodologies Analysis, and Networking for Osteosarcoma Pathogenesis',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_9',
        name: 'Weighted Protein Interaction Network Analysis of Frontotemporal Dementia',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_10',
        name: 'MUFFINN: cancer gene discovery via network analysis of somatic mutation data',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_11',
        name: 'Network Rewiring in Cancer: Applications to Melanoma Cell Lines and the Cancer Genome Atlas Patients',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_12',
        name: 'Controllability in Cancer Metabolic Networks According to Drug Targets as Driver Nodes',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_13',
        name: 'Identification of Hub Genes Associated With Tuberculous Pleurisy by Integrated Bioinformatics Analysis',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_14',
        name: 'Integrative Bioinformatics Analysis Revealed Mitochondrial Defects Underlying Hypoplastic Left Heart Syndrome',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_15',
        name: 'Identification of potential key genes and functional role of CENPF in osteosarcoma using bioinformatics and experimental analysis',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_16',
        name: 'GenCoNet – A Graph Database for the Analysis of Comorbidities by Gene Networks',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_17',
        name: 'Network-Based Identification and Experimental Validation of Drug Candidates Toward SARS-CoV-2 via Targeting Virus–Host Interactome',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_18',
        name: 'Expression and prognostic potential of PLEK2 in head and neck squamous cell carcinoma based on bioinformatics analysis',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_19',
        name: 'Genome‐scale metabolic modeling reveals SARS‐CoV‐2‐induced metabolic changes and antiviral targets',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_20',
        name: 'Protein-Protein Interaction Analysis through Network Topology (Oral Cancer)',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_21',
        name: 'Weighted Gene Coexpression Network Analysis Identifies Cysteine-Rich Intestinal Protein 1 (CRIP1) as a Prognostic Gene Associated with Relapse in Patients with Acute Myeloid Leukemia.',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_22',
        name: 'Linking PharmGKB to phenotype studies and animal models of disease for drug repurposing.',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_23',
        name: 'A New Method for Computational Drug Repositioning Using Drug Pairwise Similarity',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_24',
        name: 'Predicting drug-target interactions from drug structure and protein sequence using novel convolutional neural networks',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_25',
        name: 'GCN-MF: Disease-Gene Association Identification By Graph Convolutional Networks and Matrix Factorization',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_26',
        name: 'Repurposing novel therapeutic candidate drugs for coronavirus disease-19 based on protein-protein interaction network analysis.',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_27',
        name: 'Exploring the SARS-CoV-2 virus-host-drug interactome for drug repurposing.',
        value: 1,
        symbolSize: 10
      }, {
        category: 0,
        id: 'bp_28',
        name: 'HNEDTI: Prediction of drug-target interaction based on heterogeneous network embedding',
        value: 1,
        symbolSize: 10
      }, {
        category: 1,
        id: 'd_1',
        name: 'DrugBank',
        value: 11,
        symbolSize: 32
      }, {
        category: 1,
        id: 'd_3',
        name: 'Online Mendelian Inheritance in Man (OMIM)',
        value: 6,
        symbolSize: 22
      }, {
        category: 1,
        id: 'd_4',
        name: 'PharmGKB',
        value: 3,
        symbolSize: 16
      }, {
        category: 1,
        id: 'd_5',
        name: 'DrugCentral',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_6',
        name: 'Kyoto Encyclopedia of Genes and Genomes (KEGG)',
        value: 11,
        symbolSize: 32
      }, {
        category: 1,
        id: 'd_7',
        name: 'STITCH',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_8',
        name: 'STRING',
        value: 9,
        symbolSize: 28
      }, {
        category: 1,
        id: 'd_9',
        name: 'dbSNP',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_10',
        name: 'GeneOntology',
        value: 9,
        symbolSize: 28
      }, {
        category: 1,
        id: 'd_14',
        name: 'DisGeNET',
        value: 4,
        symbolSize: 18
      }, {
        category: 1,
        id: 'd_15',
        name: 'GeneCards',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_16',
        name: 'MalaCards',
        value: 3,
        symbolSize: 16
      }, {
        category: 1,
        id: 'd_17',
        name: 'Molecular Signature Database (MsigDB)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_18',
        name: 'Human Phenotype Ontology (HPO)',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_19',
        name: 'GWAS Catalog',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_20',
        name: 'Reactome',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_21',
        name: 'GenBank',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_22',
        name: 'Therapeutic Target Database (TTD)',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_23',
        name: 'ChEMBL',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_24',
        name: 'BindingDB',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_25',
        name: 'IUPHAR/BPS Guide to PHARMACOLOGY',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_26',
        name: 'UniProt',
        value: 4,
        symbolSize: 18
      }, {
        category: 1,
        id: 'd_27',
        name: 'Gene Expression Omnibus (GEO)',
        value: 5,
        symbolSize: 20
      }, {
        category: 1,
        id: 'd_28',
        name: 'The Connectivity Map (CMap)',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_29',
        name: 'WikiPathways',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_30',
        name: 'Cancer Cell Line Encyclopedia (CCLE)',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_31',
        name: 'The Cancer Genome Atlas (TCGA)',
        value: 4,
        symbolSize: 18
      }, {
        category: 1,
        id: 'd_32',
        name: 'DGIdb',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_33',
        name: 'Metabolic Atlas',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_34',
        name: 'miRNet',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_35',
        name: 'TRRUST',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_36',
        name: 'ONCOMINE',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_37',
        name: 'PubMed',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_38',
        name: 'GTEx',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_39',
        name: 'TIMER2',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_40',
        name: 'DriverDB',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_41',
        name: 'cBioPortal',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_42',
        name: 'Catalogue Of Somatic Mutations In Cancer (COSMIC)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_43',
        name: 'CancerSEA',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_46',
        name: 'ClinicalTrials.gov',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_56',
        name: 'PhenomeNET',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_57',
        name: 'Mouse Genome Informatics (MGI)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_58',
        name: 'Unified Medical Language System (UMLS)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_59',
        name: 'The Comparative Toxicogenomics Database (CTD)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_60',
        name: 'National Drug File Reference Terminology (NDF-RT)',
        value: 2,
        symbolSize: 14
      }, {
        category: 1,
        id: 'd_61',
        name: 'Human Protein Reference Database (HPRD)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_62',
        name: 'HumanNet',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_63',
        name: 'Medical Subject Headings (MeSH)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_64',
        name: 'Herbal Ingredients Target Database (HIT)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_65',
        name: 'Traditional Chinese Medicine Integrated Database (TCMID)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_66',
        name: 'Cancer Gene Census (CGC)',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_67',
        name: 'IntAct',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_68',
        name: 'BioGRID',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_69',
        name: 'InnateDB',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_70',
        name: 'MINT',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_71',
        name: 'HuGE Phenopedia',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_72',
        name: 'Open Targets',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_73',
        name: 'BRENDA',
        value: 1,
        symbolSize: 12
      }, {
        category: 1,
        id: 'd_74',
        name: 'SuperTarget',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_1',
        name: 'Cytoscape',
        value: 12,
        symbolSize: 34
      }, {
        category: 2,
        id: 't_3',
        name: 'FunRich',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_4',
        name: 'cytoHubba',
        value: 6,
        symbolSize: 22
      }, {
        category: 2,
        id: 't_5',
        name: 'stringApp',
        value: 2,
        symbolSize: 14
      }, {
        category: 2,
        id: 't_6',
        name: 'WebGestalt (WEB-based Gene SeT AnaLysis Toolkit)',
        value: 2,
        symbolSize: 14
      }, {
        category: 2,
        id: 't_7',
        name: 'GEPIA',
        value: 3,
        symbolSize: 16
      }, {
        category: 2,
        id: 't_8',
        name: 'R',
        value: 3,
        symbolSize: 16
      }, {
        category: 2,
        id: 't_9',
        name: 'Enrichment Map',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_10',
        name: 'DAVID',
        value: 2,
        symbolSize: 14
      }, {
        category: 2,
        id: 't_11',
        name: 'PANTHER',
        value: 2,
        symbolSize: 14
      }, {
        category: 2,
        id: 't_12',
        name: 'g:Profiler',
        value: 2,
        symbolSize: 14
      }, {
        category: 2,
        id: 't_13',
        name: 'GeneMANIA',
        value: 3,
        symbolSize: 16
      }, {
        category: 2,
        id: 't_14',
        name: 'ToppGene',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_15',
        name: 'DESeq2 (R package)',
        value: 2,
        symbolSize: 14
      }, {
        category: 2,
        id: 't_16',
        name: 'Neo4j',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_17',
        name: 'Revigo',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_18',
        name: 'R spider',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_19',
        name: 'CFinder',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_20',
        name: 'MEGA X',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_21',
        name: 'Enrichr',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_22',
        name: 'FlexMix (R package)',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_23',
        name: 'psych (R package)',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_24',
        name: 'WGCNA (R package)',
        value: 3,
        symbolSize: 16
      }, {
        category: 2,
        id: 't_25',
        name: 'edgeR (R package)',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_26',
        name: 'DESeq (R package)',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_27',
        name: 'affy (R package)',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_28',
        name: 'MATLAB',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_29',
        name: 'MCODE',
        value: 4,
        symbolSize: 18
      }, {
        category: 2,
        id: 't_30',
        name: 'limma (R package)',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_31',
        name: 'clusterProfiler (R package)',
        value: 3,
        symbolSize: 16
      }, {
        category: 2,
        id: 't_32',
        name: 'Hiplot',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_33',
        name: 'Metascape',
        value: 2,
        symbolSize: 14
      }, {
        category: 2,
        id: 't_34',
        name: 'GEO2R',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_35',
        name: 'Kaplan-Meier Plotter',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_36',
        name: 'GraphPad Prism',
        value: 2,
        symbolSize: 14
      }, {
        category: 2,
        id: 't_37',
        name: 'PolySearch',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_38',
        name: 'survival (R package)',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_39',
        name: 'SOAPnuke',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_40',
        name: 'Bowtie 2',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_41',
        name: 'UALCAN',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_42',
        name: 'LinkedOmics',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_43',
        name: 'GSCALite',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_44',
        name: 'PaDEL-Descriptor',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_45',
        name: 'MimMiner',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_46',
        name: 'ANDSystem',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_47',
        name: 'TargetMine',
        value: 1,
        symbolSize: 12
      }, {
        category: 2,
        id: 't_48',
        name: 'SIMCOMP',
        value: 1,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_38',
        name: 'Protein interaction network analysis',
        value: 16,
        symbolSize: 26
      }, {
        category: 3,
        id: 'op_48',
        name: 'Sequence distance matrix generation',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_51',
        name: 'Sequence alignment',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_60',
        name: 'Text mining',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_184',
        name: 'Multiple sequence alignment',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_185',
        name: 'Local alignment',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_233',
        name: 'Gene regulatory network analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_269',
        name: 'Gene-set enrichment analysis',
        value: 20,
        symbolSize: 30
      }, {
        category: 3,
        id: 'op_291',
        name: 'Expression analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_357',
        name: 'Differential gene expression profiling',
        value: 6,
        symbolSize: 16
      }, {
        category: 3,
        id: 'op_403',
        name: 'Expression correlation analysis',
        value: 4,
        symbolSize: 14
      }, {
        category: 3,
        id: 'op_459',
        name: 'RNA-Seq analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_476',
        name: 'Weighted correlation network analysis',
        value: 4,
        symbolSize: 14
      }, {
        category: 3,
        id: 'op_515',
        name: 'Network analysis',
        value: 22,
        symbolSize: 32
      }, {
        category: 3,
        id: 'op_538',
        name: 'Gene-set pathway enrichment analysis',
        value: 12,
        symbolSize: 22
      }, {
        category: 3,
        id: 'op_539',
        name: 'Gene-set functional enrichment analysis',
        value: 14,
        symbolSize: 24
      }, {
        category: 3,
        id: 'op_540',
        name: 'Pathway crosstalk analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_541',
        name: 'Survival analysis',
        value: 6,
        symbolSize: 16
      }, {
        category: 3,
        id: 'op_542',
        name: 'Gene-set biological process enrichment analysis',
        value: 10,
        symbolSize: 20
      }, {
        category: 3,
        id: 'op_543',
        name: 'Gene-set cellular component enrichment analysis',
        value: 8,
        symbolSize: 18
      }, {
        category: 3,
        id: 'op_544',
        name: 'Gene prioritization',
        value: 6,
        symbolSize: 16
      }, {
        category: 3,
        id: 'op_545',
        name: 'Microarray analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_546',
        name: 'Drug-target network modelling',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_547',
        name: 'Network maximal clique centrality (MCC) analysis',
        value: 8,
        symbolSize: 18
      }, {
        category: 3,
        id: 'op_548',
        name: 'Network density of maximum neighborhood component (DMNC) analysis',
        value: 6,
        symbolSize: 16
      }, {
        category: 3,
        id: 'op_549',
        name: 'Network maximum neighborhood component (MNC) analysis',
        value: 4,
        symbolSize: 14
      }, {
        category: 3,
        id: 'op_550',
        name: 'Network degree analysis',
        value: 6,
        symbolSize: 16
      }, {
        category: 3,
        id: 'op_551',
        name: 'Network edge percolated component (EPC) analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_552',
        name: 'Network bottleneck analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_553',
        name: 'Network eccentricity analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_554',
        name: 'Network closeness analysis',
        value: 4,
        symbolSize: 14
      }, {
        category: 3,
        id: 'op_555',
        name: 'Network radiability analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_556',
        name: 'Network betweenness analysis',
        value: 4,
        symbolSize: 14
      }, {
        category: 3,
        id: 'op_557',
        name: 'Network stress analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_558',
        name: 'Network clustering coefficient analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_559',
        name: 'Network maximum correlation criterion (MCC) analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_560',
        name: 'Network hub analysis',
        value: 4,
        symbolSize: 14
      }, {
        category: 3,
        id: 'op_561',
        name: 'Western blot analysis',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_562',
        name: 'Hierarchical clustering',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_563',
        name: 'Matrix factorization',
        value: 2,
        symbolSize: 12
      }, {
        category: 3,
        id: 'op_565',
        name: 'Smith-Waterman sequence alignment',
        value: 2,
        symbolSize: 12
      },
    ],
    edges: [
  {
    source: 't_1',
    target: 'bp_4',
    value: 24
  }, {
    source: 't_4',
    target: 'bp_4',
    value: 12
  }, {
    source: 't_5',
    target: 'bp_4',
    value: 4
  }, {
    source: 't_3',
    target: 'bp_4',
    value: 2
  }, {
    source: 't_6',
    target: 'bp_1',
    value: 4
  }, {
    source: 't_1',
    target: 'bp_1',
    value: 24
  }, {
    source: 't_7',
    target: 'bp_1',
    value: 6
  }, {
    source: 't_8',
    target: 'bp_1',
    value: 6
  }, {
    source: 't_9',
    target: 'bp_1',
    value: 2
  }, {
    source: 't_10',
    target: 'bp_2',
    value: 4
  }, {
    source: 't_11',
    target: 'bp_2',
    value: 4
  }, {
    source: 't_12',
    target: 'bp_2',
    value: 4
  }, {
    source: 't_13',
    target: 'bp_2',
    value: 6
  }, {
    source: 't_14',
    target: 'bp_2',
    value: 2
  }, {
    source: 't_1',
    target: 'bp_2',
    value: 24
  }, {
    source: 't_15',
    target: 'bp_19',
    value: 4
  }, {
    source: 't_16',
    target: 'bp_16',
    value: 2
  }, {
    source: 't_17',
    target: 'bp_5',
    value: 2
  }, {
    source: 't_10',
    target: 'bp_5',
    value: 4
  }, {
    source: 't_18',
    target: 'bp_5',
    value: 2
  }, {
    source: 't_1',
    target: 'bp_5',
    value: 24
  }, {
    source: 't_19',
    target: 'bp_5',
    value: 2
  }, {
    source: 't_20',
    target: 'bp_6',
    value: 2
  }, {
    source: 't_21',
    target: 'bp_6',
    value: 2
  }, {
    source: 't_8',
    target: 'bp_11',
    value: 6
  }, {
    source: 't_22',
    target: 'bp_11',
    value: 2
  }, {
    source: 't_23',
    target: 'bp_11',
    value: 2
  }, {
    source: 't_24',
    target: 'bp_11',
    value: 6
  }, {
    source: 't_25',
    target: 'bp_11',
    value: 2
  }, {
    source: 't_26',
    target: 'bp_11',
    value: 2
  }, {
    source: 't_13',
    target: 'bp_11',
    value: 6
  }, {
    source: 't_27',
    target: 'bp_11',
    value: 2
  }, {
    source: 't_28',
    target: 'bp_12',
    value: 2
  }, {
    source: 't_1',
    target: 'bp_12',
    value: 24
  }, {
    source: 't_4',
    target: 'bp_12',
    value: 12
  }, {
    source: 't_29',
    target: 'bp_12',
    value: 8
  }, {
    source: 't_24',
    target: 'bp_13',
    value: 6
  }, {
    source: 't_30',
    target: 'bp_13',
    value: 2
  }, {
    source: 't_31',
    target: 'bp_13',
    value: 6
  }, {
    source: 't_1',
    target: 'bp_13',
    value: 24
  }, {
    source: 't_4',
    target: 'bp_13',
    value: 12
  }, {
    source: 't_32',
    target: 'bp_14',
    value: 2
  }, {
    source: 't_33',
    target: 'bp_14',
    value: 4
  }, {
    source: 't_1',
    target: 'bp_14',
    value: 24
  }, {
    source: 't_29',
    target: 'bp_14',
    value: 8
  }, {
    source: 't_4',
    target: 'bp_14',
    value: 12
  }, {
    source: 't_34',
    target: 'bp_15',
    value: 2
  }, {
    source: 't_33',
    target: 'bp_15',
    value: 4
  }, {
    source: 't_1',
    target: 'bp_15',
    value: 24
  }, {
    source: 't_4',
    target: 'bp_15',
    value: 12
  }, {
    source: 't_29',
    target: 'bp_15',
    value: 8
  }, {
    source: 't_35',
    target: 'bp_15',
    value: 2
  }, {
    source: 't_7',
    target: 'bp_15',
    value: 6
  }, {
    source: 't_36',
    target: 'bp_15',
    value: 4
  }, {
    source: 't_37',
    target: 'bp_20',
    value: 2
  }, {
    source: 't_1',
    target: 'bp_20',
    value: 24
  }, {
    source: 't_15',
    target: 'bp_21',
    value: 4
  }, {
    source: 't_31',
    target: 'bp_21',
    value: 6
  }, {
    source: 't_24',
    target: 'bp_21',
    value: 6
  }, {
    source: 't_38',
    target: 'bp_21',
    value: 2
  }, {
    source: 't_39',
    target: 'bp_21',
    value: 2
  }, {
    source: 't_40',
    target: 'bp_21',
    value: 2
  }, {
    source: 't_7',
    target: 'bp_21',
    value: 6
  }, {
    source: 't_41',
    target: 'bp_18',
    value: 2
  }, {
    source: 't_42',
    target: 'bp_18',
    value: 2
  }, {
    source: 't_13',
    target: 'bp_18',
    value: 6
  }, {
    source: 't_1',
    target: 'bp_18',
    value: 24
  }, {
    source: 't_29',
    target: 'bp_18',
    value: 8
  }, {
    source: 't_4',
    target: 'bp_18',
    value: 12
  }, {
    source: 't_31',
    target: 'bp_18',
    value: 6
  }, {
    source: 't_43',
    target: 'bp_18',
    value: 2
  }, {
    source: 't_44',
    target: 'bp_24',
    value: 2
  }, {
    source: 't_45',
    target: 'bp_25',
    value: 2
  }, {
    source: 't_12',
    target: 'bp_9',
    value: 4
  }, {
    source: 't_11',
    target: 'bp_9',
    value: 4
  }, {
    source: 't_6',
    target: 'bp_9',
    value: 4
  }, {
    source: 't_8',
    target: 'bp_9',
    value: 6
  }, {
    source: 't_1',
    target: 'bp_9',
    value: 24
  }, {
    source: 't_36',
    target: 'bp_9',
    value: 4
  }, {
    source: 't_46',
    target: 'bp_3',
    value: 2
  }, {
    source: 't_47',
    target: 'bp_3',
    value: 2
  }, {
    source: 't_1',
    target: 'bp_3',
    value: 24
  }, {
    source: 't_5',
    target: 'bp_3',
    value: 4
  }, {
    source: 't_48',
    target: 'bp_28',
    value: 2
  }, {
    source: 'd_14',
    target: 'bp_4',
    value: 8
  }, {
    source: 'd_8',
    target: 'bp_4',
    value: 18
  }, {
    source: 'd_3',
    target: 'bp_1',
    value: 12
  }, {
    source: 'd_8',
    target: 'bp_1',
    value: 18
  }, {
    source: 'd_10',
    target: 'bp_1',
    value: 18
  }, {
    source: 'd_6',
    target: 'bp_1',
    value: 22
  }, {
    source: 'd_3',
    target: 'bp_2',
    value: 12
  }, {
    source: 'd_15',
    target: 'bp_2',
    value: 4
  }, {
    source: 'd_8',
    target: 'bp_2',
    value: 18
  }, {
    source: 'd_16',
    target: 'bp_2',
    value: 6
  }, {
    source: 'd_10',
    target: 'bp_2',
    value: 18
  }, {
    source: 'd_6',
    target: 'bp_2',
    value: 22
  }, {
    source: 'd_1',
    target: 'bp_2',
    value: 22
  }, {
    source: 'd_17',
    target: 'bp_19',
    value: 2
  }, {
    source: 'd_1',
    target: 'bp_19',
    value: 22
  }, {
    source: 'd_18',
    target: 'bp_16',
    value: 4
  }, {
    source: 'd_3',
    target: 'bp_16',
    value: 12
  }, {
    source: 'd_14',
    target: 'bp_16',
    value: 8
  }, {
    source: 'd_16',
    target: 'bp_16',
    value: 6
  }, {
    source: 'd_19',
    target: 'bp_16',
    value: 4
  }, {
    source: 'd_9',
    target: 'bp_16',
    value: 2
  }, {
    source: 'd_1',
    target: 'bp_16',
    value: 22
  }, {
    source: 'd_5',
    target: 'bp_16',
    value: 2
  }, {
    source: 'd_20',
    target: 'bp_5',
    value: 2
  }, {
    source: 'd_6',
    target: 'bp_5',
    value: 22
  }, {
    source: 'd_8',
    target: 'bp_5',
    value: 18
  }, {
    source: 'd_21',
    target: 'bp_6',
    value: 2
  }, {
    source: 'd_6',
    target: 'bp_6',
    value: 22
  }, {
    source: 'd_10',
    target: 'bp_6',
    value: 18
  }, {
    source: 'd_1',
    target: 'bp_6',
    value: 22
  }, {
    source: 'd_22',
    target: 'bp_6',
    value: 4
  }, {
    source: 'd_4',
    target: 'bp_6',
    value: 6
  }, {
    source: 'd_23',
    target: 'bp_6',
    value: 4
  }, {
    source: 'd_24',
    target: 'bp_6',
    value: 4
  }, {
    source: 'd_25',
    target: 'bp_6',
    value: 4
  }, {
    source: 'd_26',
    target: 'bp_6',
    value: 8
  }, {
    source: 'd_15',
    target: 'bp_6',
    value: 4
  }, {
    source: 'd_27',
    target: 'bp_6',
    value: 10
  }, {
    source: 'd_28',
    target: 'bp_6',
    value: 4
  }, {
    source: 'd_29',
    target: 'bp_11',
    value: 2
  }, {
    source: 'd_30',
    target: 'bp_11',
    value: 4
  }, {
    source: 'd_31',
    target: 'bp_11',
    value: 8
  }, {
    source: 'd_27',
    target: 'bp_11',
    value: 10
  }, {
    source: 'd_32',
    target: 'bp_11',
    value: 2
  }, {
    source: 'd_33',
    target: 'bp_12',
    value: 2
  }, {
    source: 'd_1',
    target: 'bp_12',
    value: 22
  }, {
    source: 'd_10',
    target: 'bp_13',
    value: 18
  }, {
    source: 'd_6',
    target: 'bp_13',
    value: 22
  }, {
    source: 'd_8',
    target: 'bp_13',
    value: 18
  }, {
    source: 'd_14',
    target: 'bp_8',
    value: 8
  }, {
    source: 'd_27',
    target: 'bp_14',
    value: 10
  }, {
    source: 'd_8',
    target: 'bp_14',
    value: 18
  }, {
    source: 'd_10',
    target: 'bp_14',
    value: 18
  }, {
    source: 'd_6',
    target: 'bp_14',
    value: 22
  }, {
    source: 'd_34',
    target: 'bp_14',
    value: 2
  }, {
    source: 'd_35',
    target: 'bp_14',
    value: 2
  }, {
    source: 'd_27',
    target: 'bp_15',
    value: 10
  }, {
    source: 'd_10',
    target: 'bp_15',
    value: 18
  }, {
    source: 'd_6',
    target: 'bp_15',
    value: 22
  }, {
    source: 'd_8',
    target: 'bp_15',
    value: 18
  }, {
    source: 'd_26',
    target: 'bp_15',
    value: 8
  }, {
    source: 'd_36',
    target: 'bp_15',
    value: 4
  }, {
    source: 'd_3',
    target: 'bp_20',
    value: 12
  }, {
    source: 'd_1',
    target: 'bp_20',
    value: 22
  }, {
    source: 'd_26',
    target: 'bp_20',
    value: 8
  }, {
    source: 'd_37',
    target: 'bp_20',
    value: 4
  }, {
    source: 'd_8',
    target: 'bp_20',
    value: 18
  }, {
    source: 'd_31',
    target: 'bp_21',
    value: 8
  }, {
    source: 'd_6',
    target: 'bp_21',
    value: 22
  }, {
    source: 'd_10',
    target: 'bp_21',
    value: 18
  }, {
    source: 'd_38',
    target: 'bp_21',
    value: 4
  }, {
    source: 'd_31',
    target: 'bp_18',
    value: 8
  }, {
    source: 'd_30',
    target: 'bp_18',
    value: 4
  }, {
    source: 'd_39',
    target: 'bp_18',
    value: 2
  }, {
    source: 'd_36',
    target: 'bp_18',
    value: 4
  }, {
    source: 'd_27',
    target: 'bp_18',
    value: 10
  }, {
    source: 'd_40',
    target: 'bp_18',
    value: 2
  }, {
    source: 'd_41',
    target: 'bp_18',
    value: 2
  }, {
    source: 'd_42',
    target: 'bp_18',
    value: 2
  }, {
    source: 'd_43',
    target: 'bp_18',
    value: 2
  }, {
    source: 'd_6',
    target: 'bp_18',
    value: 22
  }, {
    source: 'd_10',
    target: 'bp_18',
    value: 18
  }, {
    source: 'd_8',
    target: 'bp_18',
    value: 18
  }, {
    source: 'd_56',
    target: 'bp_22',
    value: 2
  }, {
    source: 'd_3',
    target: 'bp_22',
    value: 12
  }, {
    source: 'd_57',
    target: 'bp_22',
    value: 2
  }, {
    source: 'd_4',
    target: 'bp_22',
    value: 6
  }, {
    source: 'd_58',
    target: 'bp_22',
    value: 2
  }, {
    source: 'd_59',
    target: 'bp_22',
    value: 2
  }, {
    source: 'd_1',
    target: 'bp_23',
    value: 22
  }, {
    source: 'd_60',
    target: 'bp_23',
    value: 4
  }, {
    source: 'd_61',
    target: 'bp_23',
    value: 2
  }, {
    source: 'd_46',
    target: 'bp_23',
    value: 2
  }, {
    source: 'd_37',
    target: 'bp_23',
    value: 4
  }, {
    source: 'd_6',
    target: 'bp_24',
    value: 22
  }, {
    source: 'd_1',
    target: 'bp_24',
    value: 22
  }, {
    source: 'd_3',
    target: 'bp_25',
    value: 12
  }, {
    source: 'd_28',
    target: 'bp_25',
    value: 4
  }, {
    source: 'd_62',
    target: 'bp_25',
    value: 2
  }, {
    source: 'd_63',
    target: 'bp_25',
    value: 2
  }, {
    source: 'd_1',
    target: 'bp_17',
    value: 22
  }, {
    source: 'd_4',
    target: 'bp_17',
    value: 6
  }, {
    source: 'd_22',
    target: 'bp_17',
    value: 4
  }, {
    source: 'd_23',
    target: 'bp_17',
    value: 4
  }, {
    source: 'd_24',
    target: 'bp_17',
    value: 4
  }, {
    source: 'd_25',
    target: 'bp_17',
    value: 4
  }, {
    source: 'd_7',
    target: 'bp_17',
    value: 2
  }, {
    source: 'd_64',
    target: 'bp_17',
    value: 2
  }, {
    source: 'd_65',
    target: 'bp_17',
    value: 2
  }, {
    source: 'd_31',
    target: 'bp_10',
    value: 8
  }, {
    source: 'd_66',
    target: 'bp_10',
    value: 2
  }, {
    source: 'd_67',
    target: 'bp_9',
    value: 2
  }, {
    source: 'd_68',
    target: 'bp_9',
    value: 2
  }, {
    source: 'd_69',
    target: 'bp_9',
    value: 2
  }, {
    source: 'd_70',
    target: 'bp_9',
    value: 2
  }, {
    source: 'd_26',
    target: 'bp_9',
    value: 8
  }, {
    source: 'd_10',
    target: 'bp_9',
    value: 18
  }, {
    source: 'd_16',
    target: 'bp_3',
    value: 6
  }, {
    source: 'd_18',
    target: 'bp_3',
    value: 4
  }, {
    source: 'd_19',
    target: 'bp_3',
    value: 4
  }, {
    source: 'd_38',
    target: 'bp_3',
    value: 4
  }, {
    source: 'd_14',
    target: 'bp_3',
    value: 8
  }, {
    source: 'd_1',
    target: 'bp_3',
    value: 22
  }, {
    source: 'd_60',
    target: 'bp_3',
    value: 4
  }, {
    source: 'd_71',
    target: 'bp_3',
    value: 2
  }, {
    source: 'd_72',
    target: 'bp_3',
    value: 2
  }, {
    source: 'd_6',
    target: 'bp_28',
    value: 22
  }, {
    source: 'd_73',
    target: 'bp_28',
    value: 2
  }, {
    source: 'd_1',
    target: 'bp_28',
    value: 22
  }, {
    source: 'd_74',
    target: 'bp_28',
    value: 2
  }, {
    source: 'op_269',
    target: 'bp_1',
    value: 40
  }, {
    source: 'op_538',
    target: 'bp_1',
    value: 24
  }, {
    source: 'op_539',
    target: 'bp_1',
    value: 28
  }, {
    source: 'op_540',
    target: 'bp_1',
    value: 4
  }, {
    source: 'op_515',
    target: 'bp_1',
    value: 44
  }, {
    source: 'op_541',
    target: 'bp_1',
    value: 12
  }, {
    source: 'op_269',
    target: 'bp_2',
    value: 40
  }, {
    source: 'op_539',
    target: 'bp_2',
    value: 28
  }, {
    source: 'op_542',
    target: 'bp_2',
    value: 20
  }, {
    source: 'op_543',
    target: 'bp_2',
    value: 16
  }, {
    source: 'op_233',
    target: 'bp_2',
    value: 4
  }, {
    source: 'op_544',
    target: 'bp_2',
    value: 12
  }, {
    source: 'op_269',
    target: 'bp_5',
    value: 40
  }, {
    source: 'op_538',
    target: 'bp_5',
    value: 24
  }, {
    source: 'op_515',
    target: 'bp_5',
    value: 44
  }, {
    source: 'op_291',
    target: 'bp_5',
    value: 4
  }, {
    source: 'op_545',
    target: 'bp_5',
    value: 4
  }, {
    source: 'op_542',
    target: 'bp_5',
    value: 20
  }, {
    source: 'op_544',
    target: 'bp_5',
    value: 12
  }, {
    source: 'op_38',
    target: 'bp_5',
    value: 32
  }, {
    source: 'op_184',
    target: 'bp_6',
    value: 4
  }, {
    source: 'op_48',
    target: 'bp_6',
    value: 4
  }, {
    source: 'op_269',
    target: 'bp_6',
    value: 40
  }, {
    source: 'op_539',
    target: 'bp_6',
    value: 28
  }, {
    source: 'op_546',
    target: 'bp_6',
    value: 4
  }, {
    source: 'op_38',
    target: 'bp_6',
    value: 32
  }, {
    source: 'op_515',
    target: 'bp_6',
    value: 44
  }, {
    source: 'op_515',
    target: 'bp_11',
    value: 44
  }, {
    source: 'op_515',
    target: 'bp_12',
    value: 44
  }, {
    source: 'op_547',
    target: 'bp_12',
    value: 16
  }, {
    source: 'op_548',
    target: 'bp_12',
    value: 12
  }, {
    source: 'op_549',
    target: 'bp_12',
    value: 8
  }, {
    source: 'op_550',
    target: 'bp_12',
    value: 12
  }, {
    source: 'op_551',
    target: 'bp_12',
    value: 4
  }, {
    source: 'op_552',
    target: 'bp_12',
    value: 4
  }, {
    source: 'op_553',
    target: 'bp_12',
    value: 4
  }, {
    source: 'op_554',
    target: 'bp_12',
    value: 8
  }, {
    source: 'op_555',
    target: 'bp_12',
    value: 4
  }, {
    source: 'op_556',
    target: 'bp_12',
    value: 8
  }, {
    source: 'op_557',
    target: 'bp_12',
    value: 4
  }, {
    source: 'op_558',
    target: 'bp_12',
    value: 4
  }, {
    source: 'op_403',
    target: 'bp_13',
    value: 8
  }, {
    source: 'op_515',
    target: 'bp_13',
    value: 44
  }, {
    source: 'op_269',
    target: 'bp_13',
    value: 40
  }, {
    source: 'op_543',
    target: 'bp_13',
    value: 16
  }, {
    source: 'op_542',
    target: 'bp_13',
    value: 20
  }, {
    source: 'op_38',
    target: 'bp_13',
    value: 32
  }, {
    source: 'op_547',
    target: 'bp_13',
    value: 16
  }, {
    source: 'op_476',
    target: 'bp_13',
    value: 8
  }, {
    source: 'op_544',
    target: 'bp_8',
    value: 12
  }, {
    source: 'op_515',
    target: 'bp_8',
    value: 44
  }, {
    source: 'op_38',
    target: 'bp_8',
    value: 32
  }, {
    source: 'op_538',
    target: 'bp_8',
    value: 24
  }, {
    source: 'op_357',
    target: 'bp_14',
    value: 12
  }, {
    source: 'op_269',
    target: 'bp_14',
    value: 40
  }, {
    source: 'op_538',
    target: 'bp_14',
    value: 24
  }, {
    source: 'op_539',
    target: 'bp_14',
    value: 28
  }, {
    source: 'op_38',
    target: 'bp_14',
    value: 32
  }, {
    source: 'op_559',
    target: 'bp_14',
    value: 4
  }, {
    source: 'op_548',
    target: 'bp_14',
    value: 12
  }, {
    source: 'op_549',
    target: 'bp_14',
    value: 8
  }, {
    source: 'op_357',
    target: 'bp_15',
    value: 12
  }, {
    source: 'op_539',
    target: 'bp_15',
    value: 28
  }, {
    source: 'op_269',
    target: 'bp_15',
    value: 40
  }, {
    source: 'op_538',
    target: 'bp_15',
    value: 24
  }, {
    source: 'op_38',
    target: 'bp_15',
    value: 32
  }, {
    source: 'op_515',
    target: 'bp_15',
    value: 44
  }, {
    source: 'op_548',
    target: 'bp_15',
    value: 12
  }, {
    source: 'op_547',
    target: 'bp_15',
    value: 16
  }, {
    source: 'op_550',
    target: 'bp_15',
    value: 12
  }, {
    source: 'op_541',
    target: 'bp_15',
    value: 12
  }, {
    source: 'op_38',
    target: 'bp_20',
    value: 32
  }, {
    source: 'op_515',
    target: 'bp_20',
    value: 44
  }, {
    source: 'op_556',
    target: 'bp_20',
    value: 8
  }, {
    source: 'op_60',
    target: 'bp_20',
    value: 4
  }, {
    source: 'op_560',
    target: 'bp_20',
    value: 8
  }, {
    source: 'op_554',
    target: 'bp_20',
    value: 8
  }, {
    source: 'op_550',
    target: 'bp_20',
    value: 12
  }, {
    source: 'op_357',
    target: 'bp_21',
    value: 12
  }, {
    source: 'op_539',
    target: 'bp_21',
    value: 28
  }, {
    source: 'op_269',
    target: 'bp_21',
    value: 40
  }, {
    source: 'op_538',
    target: 'bp_21',
    value: 24
  }, {
    source: 'op_476',
    target: 'bp_21',
    value: 8
  }, {
    source: 'op_459',
    target: 'bp_21',
    value: 4
  }, {
    source: 'op_561',
    target: 'bp_18',
    value: 4
  }, {
    source: 'op_541',
    target: 'bp_18',
    value: 12
  }, {
    source: 'op_269',
    target: 'bp_18',
    value: 40
  }, {
    source: 'op_403',
    target: 'bp_18',
    value: 8
  }, {
    source: 'op_542',
    target: 'bp_18',
    value: 20
  }, {
    source: 'op_543',
    target: 'bp_18',
    value: 16
  }, {
    source: 'op_539',
    target: 'bp_18',
    value: 28
  }, {
    source: 'op_547',
    target: 'bp_18',
    value: 16
  }, {
    source: 'op_562',
    target: 'bp_18',
    value: 4
  }, {
    source: 'op_560',
    target: 'bp_18',
    value: 8
  }, {
    source: 'op_563',
    target: 'bp_25',
    value: 4
  }, {
    source: 'op_38',
    target: 'bp_9',
    value: 32
  }, {
    source: 'op_515',
    target: 'bp_9',
    value: 44
  }, {
    source: 'op_269',
    target: 'bp_9',
    value: 40
  }, {
    source: 'op_542',
    target: 'bp_9',
    value: 20
  }, {
    source: 'op_543',
    target: 'bp_9',
    value: 16
  }, {
    source: 'op_515',
    target: 'bp_3',
    value: 44
  }, {
    source: 'op_51',
    target: 'bp_28',
    value: 4
  }, {
    source: 'op_185',
    target: 'bp_28',
    value: 4
  }, {
    source: 'op_565',
    target: 'bp_28',
    value: 4
  }, ],
  };
  
  export var graph3 = {
    nodes: [
      { name: "Anatomy" },
      { name: "Gene" },
      { name: "Chemical" },
      { name: "Disease" },
      { name: "VariantAnnotation", symbol: "diamond" },
      { name: "Phenotype" },
      { name: "ClinicalAnnotation", symbol: "diamond" },
      { name: "Pathway" },
    ],
    edges: [
      { source: "Anatomy", target: "Gene" },
      { source: "Gene", target: "Gene" },
      { source: "Chemical", target: "Gene" },
      { source: "Disease", target: "Gene" },
      { source: "VariantAnnotation", target: "Gene" },
      { source: "Phenotype", target: "Gene" },
      { source: "ClinicalAnnotation", target: "Gene" },
      { source: "Gene", target: "Pathway" },
      { source: "Pathway", target: "Pathway" },
      { source: "Chemical", target: "Pathway" },
      { source: "Chemical", target: "Chemical" },
      { source: "ClinicalAnnotation", target: "Chemical" },
      { source: "VariantAnnotation", target: "Chemical" },
      { source: "Gene", target: "Chemical" },
      { source: "Disease", target: "Disease" },
      { source: "Chemical", target: "Disease" },
      { source: "ClinicalAnnotation", target: "Disease" },
      { source: "Pathway", target: "Disease" },
      { source: "ClinicalAnnotation", target: "Phenotype" },
    ]
  };