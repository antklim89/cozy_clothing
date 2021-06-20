/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type HeroJson */
  readonly childrenHeroJson: Maybe<ReadonlyArray<Maybe<HeroJson>>>;
  /** Returns the first child node of type HeroJson or null if there are no children of given type on this node */
  readonly childHeroJson: Maybe<HeroJson>;
  /** Returns all children nodes filtered by type FeaturesJson */
  readonly childrenFeaturesJson: Maybe<ReadonlyArray<Maybe<FeaturesJson>>>;
  /** Returns the first child node of type FeaturesJson or null if there are no children of given type on this node */
  readonly childFeaturesJson: Maybe<FeaturesJson>;
  /** Returns all children nodes filtered by type AboutJson */
  readonly childrenAboutJson: Maybe<ReadonlyArray<Maybe<AboutJson>>>;
  /** Returns the first child node of type AboutJson or null if there are no children of given type on this node */
  readonly childAboutJson: Maybe<AboutJson>;
  /** Returns all children nodes filtered by type ContentJson */
  readonly childrenContentJson: Maybe<ReadonlyArray<Maybe<ContentJson>>>;
  /** Returns the first child node of type ContentJson or null if there are no children of given type on this node */
  readonly childContentJson: Maybe<ContentJson>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly apiRoute: Scalars['String'];
  readonly originalFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly categories: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pageNumber: Maybe<Scalars['Int']>;
  readonly humanPageNumber: Maybe<Scalars['Int']>;
  readonly skip: Maybe<Scalars['Int']>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly numberOfPages: Maybe<Scalars['Int']>;
  readonly previousPagePath: Maybe<Scalars['String']>;
  readonly nextPagePath: Maybe<Scalars['String']>;
  readonly category: Maybe<Scalars['String']>;
};

type LocalSearchAllProducts = Node & {
  /** The name of the index. */
  readonly name: Scalars['String'];
  /** The search engine used to create the index. */
  readonly engine: Scalars['String'];
  /** The search index created using the selected engine. */
  readonly index: Scalars['String'];
  /** A JSON object used to map search results to their data. */
  readonly store: Scalars['JSON'];
  /** Save the index to the site's static directory and return a public URL to it. */
  readonly publicIndexURL: Scalars['String'];
  /** Save the store to the site's static directory and return a public URL to it. */
  readonly publicStoreURL: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly layout: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly hidden: Maybe<Scalars['Boolean']>;
  readonly discount: Maybe<Scalars['Int']>;
  readonly careatedAt: Maybe<Scalars['Date']>;
  readonly imagePreview: Maybe<File>;
  readonly images: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterImages>>>;
  readonly price: Maybe<Scalars['Int']>;
  readonly category: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatter_careatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterImages = {
  readonly image: Maybe<File>;
};

type HeroJson = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly image: Maybe<File>;
};

type FeaturesJson = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly features: Maybe<ReadonlyArray<Maybe<FeaturesJsonFeatures>>>;
};

type FeaturesJsonFeatures = {
  readonly image: Maybe<File>;
  readonly text: Maybe<Scalars['String']>;
};

type AboutJson = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly image: Maybe<File>;
  readonly chooseUs: Maybe<ReadonlyArray<Maybe<AboutJsonChooseUs>>>;
};

type AboutJsonChooseUs = {
  readonly image: Maybe<File>;
  readonly text: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type ContentJson = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly men: Maybe<ReadonlyArray<Maybe<ContentJsonMen>>>;
  readonly women: Maybe<ReadonlyArray<Maybe<ContentJsonWomen>>>;
  readonly boys: Maybe<ReadonlyArray<Maybe<ContentJsonBoys>>>;
  readonly girls: Maybe<ReadonlyArray<Maybe<ContentJsonGirls>>>;
};

type ContentJsonMen = {
  readonly category: Maybe<Scalars['String']>;
};

type ContentJsonWomen = {
  readonly category: Maybe<Scalars['String']>;
};

type ContentJsonBoys = {
  readonly category: Maybe<Scalars['String']>;
};

type ContentJsonGirls = {
  readonly category: Maybe<Scalars['String']>;
};

type ProductCatalog = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly catalog: Maybe<ProductCatalogCatalog>;
};

type ProductCatalogCatalog = {
  readonly boys: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly girls: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly women: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly men: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly enableIdentityWidget: Maybe<Scalars['Boolean']>;
  readonly manualInit: Maybe<Scalars['Boolean']>;
  readonly modulePath: Maybe<Scalars['String']>;
  readonly publicPath: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly engine: Maybe<Scalars['String']>;
  readonly query: Maybe<Scalars['String']>;
  readonly ref: Maybe<Scalars['String']>;
  readonly index: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly store: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly commonmark: Maybe<Scalars['Boolean']>;
  readonly footnotes: Maybe<Scalars['Boolean']>;
  readonly pedantic: Maybe<Scalars['Boolean']>;
  readonly gfm: Maybe<Scalars['Boolean']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly cssLoaderOptions: Maybe<SitePluginPluginOptionsCssLoaderOptions>;
  readonly path: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliases>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsCssLoaderOptions = {
  readonly esModule: Maybe<Scalars['Boolean']>;
  readonly modules: Maybe<SitePluginPluginOptionsCssLoaderOptionsModules>;
};

type SitePluginPluginOptionsCssLoaderOptionsModules = {
  readonly namedExport: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsAliases = {
  readonly _: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly localSearchAllProducts: Maybe<LocalSearchAllProducts>;
  readonly allLocalSearchAllProducts: LocalSearchAllProductsConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly heroJson: Maybe<HeroJson>;
  readonly allHeroJson: HeroJsonConnection;
  readonly featuresJson: Maybe<FeaturesJson>;
  readonly allFeaturesJson: FeaturesJsonConnection;
  readonly aboutJson: Maybe<AboutJson>;
  readonly allAboutJson: AboutJsonConnection;
  readonly contentJson: Maybe<ContentJson>;
  readonly allContentJson: ContentJsonConnection;
  readonly productCatalog: Maybe<ProductCatalog>;
  readonly allProductCatalog: ProductCatalogConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childrenHeroJson: Maybe<HeroJsonFilterListInput>;
  childHeroJson: Maybe<HeroJsonFilterInput>;
  childrenFeaturesJson: Maybe<FeaturesJsonFilterListInput>;
  childFeaturesJson: Maybe<FeaturesJsonFilterInput>;
  childrenAboutJson: Maybe<AboutJsonFilterListInput>;
  childAboutJson: Maybe<AboutJsonFilterInput>;
  childrenContentJson: Maybe<ContentJsonFilterListInput>;
  childContentJson: Maybe<ContentJsonFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  apiRoute: Maybe<StringQueryOperatorInput>;
  originalFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_localSearchAllProductsArgs = {
  name: Maybe<StringQueryOperatorInput>;
  engine: Maybe<StringQueryOperatorInput>;
  index: Maybe<StringQueryOperatorInput>;
  store: Maybe<JSONQueryOperatorInput>;
  publicIndexURL: Maybe<StringQueryOperatorInput>;
  publicStoreURL: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allLocalSearchAllProductsArgs = {
  filter: Maybe<LocalSearchAllProductsFilterInput>;
  sort: Maybe<LocalSearchAllProductsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_heroJsonArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  image: Maybe<FileFilterInput>;
};


type Query_allHeroJsonArgs = {
  filter: Maybe<HeroJsonFilterInput>;
  sort: Maybe<HeroJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_featuresJsonArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  features: Maybe<FeaturesJsonFeaturesFilterListInput>;
};


type Query_allFeaturesJsonArgs = {
  filter: Maybe<FeaturesJsonFilterInput>;
  sort: Maybe<FeaturesJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_aboutJsonArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  image: Maybe<FileFilterInput>;
  chooseUs: Maybe<AboutJsonChooseUsFilterListInput>;
};


type Query_allAboutJsonArgs = {
  filter: Maybe<AboutJsonFilterInput>;
  sort: Maybe<AboutJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentJsonArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  men: Maybe<ContentJsonMenFilterListInput>;
  women: Maybe<ContentJsonWomenFilterListInput>;
  boys: Maybe<ContentJsonBoysFilterListInput>;
  girls: Maybe<ContentJsonGirlsFilterListInput>;
};


type Query_allContentJsonArgs = {
  filter: Maybe<ContentJsonFilterInput>;
  sort: Maybe<ContentJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_productCatalogArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  catalog: Maybe<ProductCatalogCatalogFilterInput>;
};


type Query_allProductCatalogArgs = {
  filter: Maybe<ProductCatalogFilterInput>;
  sort: Maybe<ProductCatalogSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly hidden: Maybe<BooleanQueryOperatorInput>;
  readonly discount: Maybe<IntQueryOperatorInput>;
  readonly careatedAt: Maybe<DateQueryOperatorInput>;
  readonly imagePreview: Maybe<FileFilterInput>;
  readonly images: Maybe<MarkdownRemarkFrontmatterImagesFilterListInput>;
  readonly price: Maybe<IntQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly childrenHeroJson: Maybe<HeroJsonFilterListInput>;
  readonly childHeroJson: Maybe<HeroJsonFilterInput>;
  readonly childrenFeaturesJson: Maybe<FeaturesJsonFilterListInput>;
  readonly childFeaturesJson: Maybe<FeaturesJsonFilterInput>;
  readonly childrenAboutJson: Maybe<AboutJsonFilterListInput>;
  readonly childAboutJson: Maybe<AboutJsonFilterInput>;
  readonly childrenContentJson: Maybe<ContentJsonFilterListInput>;
  readonly childContentJson: Maybe<ContentJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type HeroJsonFilterListInput = {
  readonly elemMatch: Maybe<HeroJsonFilterInput>;
};

type HeroJsonFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
};

type FeaturesJsonFilterListInput = {
  readonly elemMatch: Maybe<FeaturesJsonFilterInput>;
};

type FeaturesJsonFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly features: Maybe<FeaturesJsonFeaturesFilterListInput>;
};

type FeaturesJsonFeaturesFilterListInput = {
  readonly elemMatch: Maybe<FeaturesJsonFeaturesFilterInput>;
};

type FeaturesJsonFeaturesFilterInput = {
  readonly image: Maybe<FileFilterInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
};

type AboutJsonFilterListInput = {
  readonly elemMatch: Maybe<AboutJsonFilterInput>;
};

type AboutJsonFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
  readonly chooseUs: Maybe<AboutJsonChooseUsFilterListInput>;
};

type AboutJsonChooseUsFilterListInput = {
  readonly elemMatch: Maybe<AboutJsonChooseUsFilterInput>;
};

type AboutJsonChooseUsFilterInput = {
  readonly image: Maybe<FileFilterInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type ContentJsonFilterListInput = {
  readonly elemMatch: Maybe<ContentJsonFilterInput>;
};

type ContentJsonFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly men: Maybe<ContentJsonMenFilterListInput>;
  readonly women: Maybe<ContentJsonWomenFilterListInput>;
  readonly boys: Maybe<ContentJsonBoysFilterListInput>;
  readonly girls: Maybe<ContentJsonGirlsFilterListInput>;
};

type ContentJsonMenFilterListInput = {
  readonly elemMatch: Maybe<ContentJsonMenFilterInput>;
};

type ContentJsonMenFilterInput = {
  readonly category: Maybe<StringQueryOperatorInput>;
};

type ContentJsonWomenFilterListInput = {
  readonly elemMatch: Maybe<ContentJsonWomenFilterInput>;
};

type ContentJsonWomenFilterInput = {
  readonly category: Maybe<StringQueryOperatorInput>;
};

type ContentJsonBoysFilterListInput = {
  readonly elemMatch: Maybe<ContentJsonBoysFilterInput>;
};

type ContentJsonBoysFilterInput = {
  readonly category: Maybe<StringQueryOperatorInput>;
};

type ContentJsonGirlsFilterListInput = {
  readonly elemMatch: Maybe<ContentJsonGirlsFilterInput>;
};

type ContentJsonGirlsFilterInput = {
  readonly category: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterImagesFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterImagesFilterInput>;
};

type MarkdownRemarkFrontmatterImagesFilterInput = {
  readonly image: Maybe<FileFilterInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.frontmatter.layout'
  | 'childrenMarkdownRemark.frontmatter.type'
  | 'childrenMarkdownRemark.frontmatter.hidden'
  | 'childrenMarkdownRemark.frontmatter.discount'
  | 'childrenMarkdownRemark.frontmatter.careatedAt'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.sourceInstanceName'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.absolutePath'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.relativePath'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.extension'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.size'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.prettySize'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.modifiedTime'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.accessTime'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.changeTime'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.birthTime'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.root'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.dir'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.base'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.ext'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.name'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.relativeDirectory'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.dev'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.mode'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.nlink'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.uid'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.gid'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.rdev'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.ino'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.atimeMs'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.mtimeMs'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.ctimeMs'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.atime'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.mtime'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.ctime'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.birthtime'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.birthtimeMs'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.blksize'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.blocks'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.publicURL'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.childrenImageSharp'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.childrenMarkdownRemark'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.childrenHeroJson'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.childrenFeaturesJson'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.childrenAboutJson'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.childrenContentJson'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.id'
  | 'childrenMarkdownRemark.frontmatter.imagePreview.children'
  | 'childrenMarkdownRemark.frontmatter.images'
  | 'childrenMarkdownRemark.frontmatter.price'
  | 'childrenMarkdownRemark.frontmatter.category'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.fileAbsolutePath'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.frontmatter.layout'
  | 'childMarkdownRemark.frontmatter.type'
  | 'childMarkdownRemark.frontmatter.hidden'
  | 'childMarkdownRemark.frontmatter.discount'
  | 'childMarkdownRemark.frontmatter.careatedAt'
  | 'childMarkdownRemark.frontmatter.imagePreview.sourceInstanceName'
  | 'childMarkdownRemark.frontmatter.imagePreview.absolutePath'
  | 'childMarkdownRemark.frontmatter.imagePreview.relativePath'
  | 'childMarkdownRemark.frontmatter.imagePreview.extension'
  | 'childMarkdownRemark.frontmatter.imagePreview.size'
  | 'childMarkdownRemark.frontmatter.imagePreview.prettySize'
  | 'childMarkdownRemark.frontmatter.imagePreview.modifiedTime'
  | 'childMarkdownRemark.frontmatter.imagePreview.accessTime'
  | 'childMarkdownRemark.frontmatter.imagePreview.changeTime'
  | 'childMarkdownRemark.frontmatter.imagePreview.birthTime'
  | 'childMarkdownRemark.frontmatter.imagePreview.root'
  | 'childMarkdownRemark.frontmatter.imagePreview.dir'
  | 'childMarkdownRemark.frontmatter.imagePreview.base'
  | 'childMarkdownRemark.frontmatter.imagePreview.ext'
  | 'childMarkdownRemark.frontmatter.imagePreview.name'
  | 'childMarkdownRemark.frontmatter.imagePreview.relativeDirectory'
  | 'childMarkdownRemark.frontmatter.imagePreview.dev'
  | 'childMarkdownRemark.frontmatter.imagePreview.mode'
  | 'childMarkdownRemark.frontmatter.imagePreview.nlink'
  | 'childMarkdownRemark.frontmatter.imagePreview.uid'
  | 'childMarkdownRemark.frontmatter.imagePreview.gid'
  | 'childMarkdownRemark.frontmatter.imagePreview.rdev'
  | 'childMarkdownRemark.frontmatter.imagePreview.ino'
  | 'childMarkdownRemark.frontmatter.imagePreview.atimeMs'
  | 'childMarkdownRemark.frontmatter.imagePreview.mtimeMs'
  | 'childMarkdownRemark.frontmatter.imagePreview.ctimeMs'
  | 'childMarkdownRemark.frontmatter.imagePreview.atime'
  | 'childMarkdownRemark.frontmatter.imagePreview.mtime'
  | 'childMarkdownRemark.frontmatter.imagePreview.ctime'
  | 'childMarkdownRemark.frontmatter.imagePreview.birthtime'
  | 'childMarkdownRemark.frontmatter.imagePreview.birthtimeMs'
  | 'childMarkdownRemark.frontmatter.imagePreview.blksize'
  | 'childMarkdownRemark.frontmatter.imagePreview.blocks'
  | 'childMarkdownRemark.frontmatter.imagePreview.publicURL'
  | 'childMarkdownRemark.frontmatter.imagePreview.childrenImageSharp'
  | 'childMarkdownRemark.frontmatter.imagePreview.childrenMarkdownRemark'
  | 'childMarkdownRemark.frontmatter.imagePreview.childrenHeroJson'
  | 'childMarkdownRemark.frontmatter.imagePreview.childrenFeaturesJson'
  | 'childMarkdownRemark.frontmatter.imagePreview.childrenAboutJson'
  | 'childMarkdownRemark.frontmatter.imagePreview.childrenContentJson'
  | 'childMarkdownRemark.frontmatter.imagePreview.id'
  | 'childMarkdownRemark.frontmatter.imagePreview.children'
  | 'childMarkdownRemark.frontmatter.images'
  | 'childMarkdownRemark.frontmatter.price'
  | 'childMarkdownRemark.frontmatter.category'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.fileAbsolutePath'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childrenHeroJson'
  | 'childrenHeroJson.id'
  | 'childrenHeroJson.parent.id'
  | 'childrenHeroJson.parent.parent.id'
  | 'childrenHeroJson.parent.parent.children'
  | 'childrenHeroJson.parent.children'
  | 'childrenHeroJson.parent.children.id'
  | 'childrenHeroJson.parent.children.children'
  | 'childrenHeroJson.parent.internal.content'
  | 'childrenHeroJson.parent.internal.contentDigest'
  | 'childrenHeroJson.parent.internal.description'
  | 'childrenHeroJson.parent.internal.fieldOwners'
  | 'childrenHeroJson.parent.internal.ignoreType'
  | 'childrenHeroJson.parent.internal.mediaType'
  | 'childrenHeroJson.parent.internal.owner'
  | 'childrenHeroJson.parent.internal.type'
  | 'childrenHeroJson.children'
  | 'childrenHeroJson.children.id'
  | 'childrenHeroJson.children.parent.id'
  | 'childrenHeroJson.children.parent.children'
  | 'childrenHeroJson.children.children'
  | 'childrenHeroJson.children.children.id'
  | 'childrenHeroJson.children.children.children'
  | 'childrenHeroJson.children.internal.content'
  | 'childrenHeroJson.children.internal.contentDigest'
  | 'childrenHeroJson.children.internal.description'
  | 'childrenHeroJson.children.internal.fieldOwners'
  | 'childrenHeroJson.children.internal.ignoreType'
  | 'childrenHeroJson.children.internal.mediaType'
  | 'childrenHeroJson.children.internal.owner'
  | 'childrenHeroJson.children.internal.type'
  | 'childrenHeroJson.internal.content'
  | 'childrenHeroJson.internal.contentDigest'
  | 'childrenHeroJson.internal.description'
  | 'childrenHeroJson.internal.fieldOwners'
  | 'childrenHeroJson.internal.ignoreType'
  | 'childrenHeroJson.internal.mediaType'
  | 'childrenHeroJson.internal.owner'
  | 'childrenHeroJson.internal.type'
  | 'childrenHeroJson.title'
  | 'childrenHeroJson.body'
  | 'childrenHeroJson.image.sourceInstanceName'
  | 'childrenHeroJson.image.absolutePath'
  | 'childrenHeroJson.image.relativePath'
  | 'childrenHeroJson.image.extension'
  | 'childrenHeroJson.image.size'
  | 'childrenHeroJson.image.prettySize'
  | 'childrenHeroJson.image.modifiedTime'
  | 'childrenHeroJson.image.accessTime'
  | 'childrenHeroJson.image.changeTime'
  | 'childrenHeroJson.image.birthTime'
  | 'childrenHeroJson.image.root'
  | 'childrenHeroJson.image.dir'
  | 'childrenHeroJson.image.base'
  | 'childrenHeroJson.image.ext'
  | 'childrenHeroJson.image.name'
  | 'childrenHeroJson.image.relativeDirectory'
  | 'childrenHeroJson.image.dev'
  | 'childrenHeroJson.image.mode'
  | 'childrenHeroJson.image.nlink'
  | 'childrenHeroJson.image.uid'
  | 'childrenHeroJson.image.gid'
  | 'childrenHeroJson.image.rdev'
  | 'childrenHeroJson.image.ino'
  | 'childrenHeroJson.image.atimeMs'
  | 'childrenHeroJson.image.mtimeMs'
  | 'childrenHeroJson.image.ctimeMs'
  | 'childrenHeroJson.image.atime'
  | 'childrenHeroJson.image.mtime'
  | 'childrenHeroJson.image.ctime'
  | 'childrenHeroJson.image.birthtime'
  | 'childrenHeroJson.image.birthtimeMs'
  | 'childrenHeroJson.image.blksize'
  | 'childrenHeroJson.image.blocks'
  | 'childrenHeroJson.image.publicURL'
  | 'childrenHeroJson.image.childrenImageSharp'
  | 'childrenHeroJson.image.childrenImageSharp.gatsbyImageData'
  | 'childrenHeroJson.image.childrenImageSharp.id'
  | 'childrenHeroJson.image.childrenImageSharp.children'
  | 'childrenHeroJson.image.childImageSharp.gatsbyImageData'
  | 'childrenHeroJson.image.childImageSharp.id'
  | 'childrenHeroJson.image.childImageSharp.children'
  | 'childrenHeroJson.image.childrenMarkdownRemark'
  | 'childrenHeroJson.image.childrenMarkdownRemark.id'
  | 'childrenHeroJson.image.childrenMarkdownRemark.excerpt'
  | 'childrenHeroJson.image.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenHeroJson.image.childrenMarkdownRemark.fileAbsolutePath'
  | 'childrenHeroJson.image.childrenMarkdownRemark.html'
  | 'childrenHeroJson.image.childrenMarkdownRemark.htmlAst'
  | 'childrenHeroJson.image.childrenMarkdownRemark.excerptAst'
  | 'childrenHeroJson.image.childrenMarkdownRemark.headings'
  | 'childrenHeroJson.image.childrenMarkdownRemark.timeToRead'
  | 'childrenHeroJson.image.childrenMarkdownRemark.tableOfContents'
  | 'childrenHeroJson.image.childrenMarkdownRemark.children'
  | 'childrenHeroJson.image.childMarkdownRemark.id'
  | 'childrenHeroJson.image.childMarkdownRemark.excerpt'
  | 'childrenHeroJson.image.childMarkdownRemark.rawMarkdownBody'
  | 'childrenHeroJson.image.childMarkdownRemark.fileAbsolutePath'
  | 'childrenHeroJson.image.childMarkdownRemark.html'
  | 'childrenHeroJson.image.childMarkdownRemark.htmlAst'
  | 'childrenHeroJson.image.childMarkdownRemark.excerptAst'
  | 'childrenHeroJson.image.childMarkdownRemark.headings'
  | 'childrenHeroJson.image.childMarkdownRemark.timeToRead'
  | 'childrenHeroJson.image.childMarkdownRemark.tableOfContents'
  | 'childrenHeroJson.image.childMarkdownRemark.children'
  | 'childrenHeroJson.image.childrenHeroJson'
  | 'childrenHeroJson.image.childrenHeroJson.id'
  | 'childrenHeroJson.image.childrenHeroJson.children'
  | 'childrenHeroJson.image.childrenHeroJson.title'
  | 'childrenHeroJson.image.childrenHeroJson.body'
  | 'childrenHeroJson.image.childHeroJson.id'
  | 'childrenHeroJson.image.childHeroJson.children'
  | 'childrenHeroJson.image.childHeroJson.title'
  | 'childrenHeroJson.image.childHeroJson.body'
  | 'childrenHeroJson.image.childrenFeaturesJson'
  | 'childrenHeroJson.image.childrenFeaturesJson.id'
  | 'childrenHeroJson.image.childrenFeaturesJson.children'
  | 'childrenHeroJson.image.childrenFeaturesJson.features'
  | 'childrenHeroJson.image.childFeaturesJson.id'
  | 'childrenHeroJson.image.childFeaturesJson.children'
  | 'childrenHeroJson.image.childFeaturesJson.features'
  | 'childrenHeroJson.image.childrenAboutJson'
  | 'childrenHeroJson.image.childrenAboutJson.id'
  | 'childrenHeroJson.image.childrenAboutJson.children'
  | 'childrenHeroJson.image.childrenAboutJson.body'
  | 'childrenHeroJson.image.childrenAboutJson.title'
  | 'childrenHeroJson.image.childrenAboutJson.chooseUs'
  | 'childrenHeroJson.image.childAboutJson.id'
  | 'childrenHeroJson.image.childAboutJson.children'
  | 'childrenHeroJson.image.childAboutJson.body'
  | 'childrenHeroJson.image.childAboutJson.title'
  | 'childrenHeroJson.image.childAboutJson.chooseUs'
  | 'childrenHeroJson.image.childrenContentJson'
  | 'childrenHeroJson.image.childrenContentJson.id'
  | 'childrenHeroJson.image.childrenContentJson.children'
  | 'childrenHeroJson.image.childrenContentJson.men'
  | 'childrenHeroJson.image.childrenContentJson.women'
  | 'childrenHeroJson.image.childrenContentJson.boys'
  | 'childrenHeroJson.image.childrenContentJson.girls'
  | 'childrenHeroJson.image.childContentJson.id'
  | 'childrenHeroJson.image.childContentJson.children'
  | 'childrenHeroJson.image.childContentJson.men'
  | 'childrenHeroJson.image.childContentJson.women'
  | 'childrenHeroJson.image.childContentJson.boys'
  | 'childrenHeroJson.image.childContentJson.girls'
  | 'childrenHeroJson.image.id'
  | 'childrenHeroJson.image.parent.id'
  | 'childrenHeroJson.image.parent.children'
  | 'childrenHeroJson.image.children'
  | 'childrenHeroJson.image.children.id'
  | 'childrenHeroJson.image.children.children'
  | 'childrenHeroJson.image.internal.content'
  | 'childrenHeroJson.image.internal.contentDigest'
  | 'childrenHeroJson.image.internal.description'
  | 'childrenHeroJson.image.internal.fieldOwners'
  | 'childrenHeroJson.image.internal.ignoreType'
  | 'childrenHeroJson.image.internal.mediaType'
  | 'childrenHeroJson.image.internal.owner'
  | 'childrenHeroJson.image.internal.type'
  | 'childHeroJson.id'
  | 'childHeroJson.parent.id'
  | 'childHeroJson.parent.parent.id'
  | 'childHeroJson.parent.parent.children'
  | 'childHeroJson.parent.children'
  | 'childHeroJson.parent.children.id'
  | 'childHeroJson.parent.children.children'
  | 'childHeroJson.parent.internal.content'
  | 'childHeroJson.parent.internal.contentDigest'
  | 'childHeroJson.parent.internal.description'
  | 'childHeroJson.parent.internal.fieldOwners'
  | 'childHeroJson.parent.internal.ignoreType'
  | 'childHeroJson.parent.internal.mediaType'
  | 'childHeroJson.parent.internal.owner'
  | 'childHeroJson.parent.internal.type'
  | 'childHeroJson.children'
  | 'childHeroJson.children.id'
  | 'childHeroJson.children.parent.id'
  | 'childHeroJson.children.parent.children'
  | 'childHeroJson.children.children'
  | 'childHeroJson.children.children.id'
  | 'childHeroJson.children.children.children'
  | 'childHeroJson.children.internal.content'
  | 'childHeroJson.children.internal.contentDigest'
  | 'childHeroJson.children.internal.description'
  | 'childHeroJson.children.internal.fieldOwners'
  | 'childHeroJson.children.internal.ignoreType'
  | 'childHeroJson.children.internal.mediaType'
  | 'childHeroJson.children.internal.owner'
  | 'childHeroJson.children.internal.type'
  | 'childHeroJson.internal.content'
  | 'childHeroJson.internal.contentDigest'
  | 'childHeroJson.internal.description'
  | 'childHeroJson.internal.fieldOwners'
  | 'childHeroJson.internal.ignoreType'
  | 'childHeroJson.internal.mediaType'
  | 'childHeroJson.internal.owner'
  | 'childHeroJson.internal.type'
  | 'childHeroJson.title'
  | 'childHeroJson.body'
  | 'childHeroJson.image.sourceInstanceName'
  | 'childHeroJson.image.absolutePath'
  | 'childHeroJson.image.relativePath'
  | 'childHeroJson.image.extension'
  | 'childHeroJson.image.size'
  | 'childHeroJson.image.prettySize'
  | 'childHeroJson.image.modifiedTime'
  | 'childHeroJson.image.accessTime'
  | 'childHeroJson.image.changeTime'
  | 'childHeroJson.image.birthTime'
  | 'childHeroJson.image.root'
  | 'childHeroJson.image.dir'
  | 'childHeroJson.image.base'
  | 'childHeroJson.image.ext'
  | 'childHeroJson.image.name'
  | 'childHeroJson.image.relativeDirectory'
  | 'childHeroJson.image.dev'
  | 'childHeroJson.image.mode'
  | 'childHeroJson.image.nlink'
  | 'childHeroJson.image.uid'
  | 'childHeroJson.image.gid'
  | 'childHeroJson.image.rdev'
  | 'childHeroJson.image.ino'
  | 'childHeroJson.image.atimeMs'
  | 'childHeroJson.image.mtimeMs'
  | 'childHeroJson.image.ctimeMs'
  | 'childHeroJson.image.atime'
  | 'childHeroJson.image.mtime'
  | 'childHeroJson.image.ctime'
  | 'childHeroJson.image.birthtime'
  | 'childHeroJson.image.birthtimeMs'
  | 'childHeroJson.image.blksize'
  | 'childHeroJson.image.blocks'
  | 'childHeroJson.image.publicURL'
  | 'childHeroJson.image.childrenImageSharp'
  | 'childHeroJson.image.childrenImageSharp.gatsbyImageData'
  | 'childHeroJson.image.childrenImageSharp.id'
  | 'childHeroJson.image.childrenImageSharp.children'
  | 'childHeroJson.image.childImageSharp.gatsbyImageData'
  | 'childHeroJson.image.childImageSharp.id'
  | 'childHeroJson.image.childImageSharp.children'
  | 'childHeroJson.image.childrenMarkdownRemark'
  | 'childHeroJson.image.childrenMarkdownRemark.id'
  | 'childHeroJson.image.childrenMarkdownRemark.excerpt'
  | 'childHeroJson.image.childrenMarkdownRemark.rawMarkdownBody'
  | 'childHeroJson.image.childrenMarkdownRemark.fileAbsolutePath'
  | 'childHeroJson.image.childrenMarkdownRemark.html'
  | 'childHeroJson.image.childrenMarkdownRemark.htmlAst'
  | 'childHeroJson.image.childrenMarkdownRemark.excerptAst'
  | 'childHeroJson.image.childrenMarkdownRemark.headings'
  | 'childHeroJson.image.childrenMarkdownRemark.timeToRead'
  | 'childHeroJson.image.childrenMarkdownRemark.tableOfContents'
  | 'childHeroJson.image.childrenMarkdownRemark.children'
  | 'childHeroJson.image.childMarkdownRemark.id'
  | 'childHeroJson.image.childMarkdownRemark.excerpt'
  | 'childHeroJson.image.childMarkdownRemark.rawMarkdownBody'
  | 'childHeroJson.image.childMarkdownRemark.fileAbsolutePath'
  | 'childHeroJson.image.childMarkdownRemark.html'
  | 'childHeroJson.image.childMarkdownRemark.htmlAst'
  | 'childHeroJson.image.childMarkdownRemark.excerptAst'
  | 'childHeroJson.image.childMarkdownRemark.headings'
  | 'childHeroJson.image.childMarkdownRemark.timeToRead'
  | 'childHeroJson.image.childMarkdownRemark.tableOfContents'
  | 'childHeroJson.image.childMarkdownRemark.children'
  | 'childHeroJson.image.childrenHeroJson'
  | 'childHeroJson.image.childrenHeroJson.id'
  | 'childHeroJson.image.childrenHeroJson.children'
  | 'childHeroJson.image.childrenHeroJson.title'
  | 'childHeroJson.image.childrenHeroJson.body'
  | 'childHeroJson.image.childHeroJson.id'
  | 'childHeroJson.image.childHeroJson.children'
  | 'childHeroJson.image.childHeroJson.title'
  | 'childHeroJson.image.childHeroJson.body'
  | 'childHeroJson.image.childrenFeaturesJson'
  | 'childHeroJson.image.childrenFeaturesJson.id'
  | 'childHeroJson.image.childrenFeaturesJson.children'
  | 'childHeroJson.image.childrenFeaturesJson.features'
  | 'childHeroJson.image.childFeaturesJson.id'
  | 'childHeroJson.image.childFeaturesJson.children'
  | 'childHeroJson.image.childFeaturesJson.features'
  | 'childHeroJson.image.childrenAboutJson'
  | 'childHeroJson.image.childrenAboutJson.id'
  | 'childHeroJson.image.childrenAboutJson.children'
  | 'childHeroJson.image.childrenAboutJson.body'
  | 'childHeroJson.image.childrenAboutJson.title'
  | 'childHeroJson.image.childrenAboutJson.chooseUs'
  | 'childHeroJson.image.childAboutJson.id'
  | 'childHeroJson.image.childAboutJson.children'
  | 'childHeroJson.image.childAboutJson.body'
  | 'childHeroJson.image.childAboutJson.title'
  | 'childHeroJson.image.childAboutJson.chooseUs'
  | 'childHeroJson.image.childrenContentJson'
  | 'childHeroJson.image.childrenContentJson.id'
  | 'childHeroJson.image.childrenContentJson.children'
  | 'childHeroJson.image.childrenContentJson.men'
  | 'childHeroJson.image.childrenContentJson.women'
  | 'childHeroJson.image.childrenContentJson.boys'
  | 'childHeroJson.image.childrenContentJson.girls'
  | 'childHeroJson.image.childContentJson.id'
  | 'childHeroJson.image.childContentJson.children'
  | 'childHeroJson.image.childContentJson.men'
  | 'childHeroJson.image.childContentJson.women'
  | 'childHeroJson.image.childContentJson.boys'
  | 'childHeroJson.image.childContentJson.girls'
  | 'childHeroJson.image.id'
  | 'childHeroJson.image.parent.id'
  | 'childHeroJson.image.parent.children'
  | 'childHeroJson.image.children'
  | 'childHeroJson.image.children.id'
  | 'childHeroJson.image.children.children'
  | 'childHeroJson.image.internal.content'
  | 'childHeroJson.image.internal.contentDigest'
  | 'childHeroJson.image.internal.description'
  | 'childHeroJson.image.internal.fieldOwners'
  | 'childHeroJson.image.internal.ignoreType'
  | 'childHeroJson.image.internal.mediaType'
  | 'childHeroJson.image.internal.owner'
  | 'childHeroJson.image.internal.type'
  | 'childrenFeaturesJson'
  | 'childrenFeaturesJson.id'
  | 'childrenFeaturesJson.parent.id'
  | 'childrenFeaturesJson.parent.parent.id'
  | 'childrenFeaturesJson.parent.parent.children'
  | 'childrenFeaturesJson.parent.children'
  | 'childrenFeaturesJson.parent.children.id'
  | 'childrenFeaturesJson.parent.children.children'
  | 'childrenFeaturesJson.parent.internal.content'
  | 'childrenFeaturesJson.parent.internal.contentDigest'
  | 'childrenFeaturesJson.parent.internal.description'
  | 'childrenFeaturesJson.parent.internal.fieldOwners'
  | 'childrenFeaturesJson.parent.internal.ignoreType'
  | 'childrenFeaturesJson.parent.internal.mediaType'
  | 'childrenFeaturesJson.parent.internal.owner'
  | 'childrenFeaturesJson.parent.internal.type'
  | 'childrenFeaturesJson.children'
  | 'childrenFeaturesJson.children.id'
  | 'childrenFeaturesJson.children.parent.id'
  | 'childrenFeaturesJson.children.parent.children'
  | 'childrenFeaturesJson.children.children'
  | 'childrenFeaturesJson.children.children.id'
  | 'childrenFeaturesJson.children.children.children'
  | 'childrenFeaturesJson.children.internal.content'
  | 'childrenFeaturesJson.children.internal.contentDigest'
  | 'childrenFeaturesJson.children.internal.description'
  | 'childrenFeaturesJson.children.internal.fieldOwners'
  | 'childrenFeaturesJson.children.internal.ignoreType'
  | 'childrenFeaturesJson.children.internal.mediaType'
  | 'childrenFeaturesJson.children.internal.owner'
  | 'childrenFeaturesJson.children.internal.type'
  | 'childrenFeaturesJson.internal.content'
  | 'childrenFeaturesJson.internal.contentDigest'
  | 'childrenFeaturesJson.internal.description'
  | 'childrenFeaturesJson.internal.fieldOwners'
  | 'childrenFeaturesJson.internal.ignoreType'
  | 'childrenFeaturesJson.internal.mediaType'
  | 'childrenFeaturesJson.internal.owner'
  | 'childrenFeaturesJson.internal.type'
  | 'childrenFeaturesJson.features'
  | 'childrenFeaturesJson.features.image.sourceInstanceName'
  | 'childrenFeaturesJson.features.image.absolutePath'
  | 'childrenFeaturesJson.features.image.relativePath'
  | 'childrenFeaturesJson.features.image.extension'
  | 'childrenFeaturesJson.features.image.size'
  | 'childrenFeaturesJson.features.image.prettySize'
  | 'childrenFeaturesJson.features.image.modifiedTime'
  | 'childrenFeaturesJson.features.image.accessTime'
  | 'childrenFeaturesJson.features.image.changeTime'
  | 'childrenFeaturesJson.features.image.birthTime'
  | 'childrenFeaturesJson.features.image.root'
  | 'childrenFeaturesJson.features.image.dir'
  | 'childrenFeaturesJson.features.image.base'
  | 'childrenFeaturesJson.features.image.ext'
  | 'childrenFeaturesJson.features.image.name'
  | 'childrenFeaturesJson.features.image.relativeDirectory'
  | 'childrenFeaturesJson.features.image.dev'
  | 'childrenFeaturesJson.features.image.mode'
  | 'childrenFeaturesJson.features.image.nlink'
  | 'childrenFeaturesJson.features.image.uid'
  | 'childrenFeaturesJson.features.image.gid'
  | 'childrenFeaturesJson.features.image.rdev'
  | 'childrenFeaturesJson.features.image.ino'
  | 'childrenFeaturesJson.features.image.atimeMs'
  | 'childrenFeaturesJson.features.image.mtimeMs'
  | 'childrenFeaturesJson.features.image.ctimeMs'
  | 'childrenFeaturesJson.features.image.atime'
  | 'childrenFeaturesJson.features.image.mtime'
  | 'childrenFeaturesJson.features.image.ctime'
  | 'childrenFeaturesJson.features.image.birthtime'
  | 'childrenFeaturesJson.features.image.birthtimeMs'
  | 'childrenFeaturesJson.features.image.blksize'
  | 'childrenFeaturesJson.features.image.blocks'
  | 'childrenFeaturesJson.features.image.publicURL'
  | 'childrenFeaturesJson.features.image.childrenImageSharp'
  | 'childrenFeaturesJson.features.image.childrenMarkdownRemark'
  | 'childrenFeaturesJson.features.image.childrenHeroJson'
  | 'childrenFeaturesJson.features.image.childrenFeaturesJson'
  | 'childrenFeaturesJson.features.image.childrenAboutJson'
  | 'childrenFeaturesJson.features.image.childrenContentJson'
  | 'childrenFeaturesJson.features.image.id'
  | 'childrenFeaturesJson.features.image.children'
  | 'childrenFeaturesJson.features.text'
  | 'childFeaturesJson.id'
  | 'childFeaturesJson.parent.id'
  | 'childFeaturesJson.parent.parent.id'
  | 'childFeaturesJson.parent.parent.children'
  | 'childFeaturesJson.parent.children'
  | 'childFeaturesJson.parent.children.id'
  | 'childFeaturesJson.parent.children.children'
  | 'childFeaturesJson.parent.internal.content'
  | 'childFeaturesJson.parent.internal.contentDigest'
  | 'childFeaturesJson.parent.internal.description'
  | 'childFeaturesJson.parent.internal.fieldOwners'
  | 'childFeaturesJson.parent.internal.ignoreType'
  | 'childFeaturesJson.parent.internal.mediaType'
  | 'childFeaturesJson.parent.internal.owner'
  | 'childFeaturesJson.parent.internal.type'
  | 'childFeaturesJson.children'
  | 'childFeaturesJson.children.id'
  | 'childFeaturesJson.children.parent.id'
  | 'childFeaturesJson.children.parent.children'
  | 'childFeaturesJson.children.children'
  | 'childFeaturesJson.children.children.id'
  | 'childFeaturesJson.children.children.children'
  | 'childFeaturesJson.children.internal.content'
  | 'childFeaturesJson.children.internal.contentDigest'
  | 'childFeaturesJson.children.internal.description'
  | 'childFeaturesJson.children.internal.fieldOwners'
  | 'childFeaturesJson.children.internal.ignoreType'
  | 'childFeaturesJson.children.internal.mediaType'
  | 'childFeaturesJson.children.internal.owner'
  | 'childFeaturesJson.children.internal.type'
  | 'childFeaturesJson.internal.content'
  | 'childFeaturesJson.internal.contentDigest'
  | 'childFeaturesJson.internal.description'
  | 'childFeaturesJson.internal.fieldOwners'
  | 'childFeaturesJson.internal.ignoreType'
  | 'childFeaturesJson.internal.mediaType'
  | 'childFeaturesJson.internal.owner'
  | 'childFeaturesJson.internal.type'
  | 'childFeaturesJson.features'
  | 'childFeaturesJson.features.image.sourceInstanceName'
  | 'childFeaturesJson.features.image.absolutePath'
  | 'childFeaturesJson.features.image.relativePath'
  | 'childFeaturesJson.features.image.extension'
  | 'childFeaturesJson.features.image.size'
  | 'childFeaturesJson.features.image.prettySize'
  | 'childFeaturesJson.features.image.modifiedTime'
  | 'childFeaturesJson.features.image.accessTime'
  | 'childFeaturesJson.features.image.changeTime'
  | 'childFeaturesJson.features.image.birthTime'
  | 'childFeaturesJson.features.image.root'
  | 'childFeaturesJson.features.image.dir'
  | 'childFeaturesJson.features.image.base'
  | 'childFeaturesJson.features.image.ext'
  | 'childFeaturesJson.features.image.name'
  | 'childFeaturesJson.features.image.relativeDirectory'
  | 'childFeaturesJson.features.image.dev'
  | 'childFeaturesJson.features.image.mode'
  | 'childFeaturesJson.features.image.nlink'
  | 'childFeaturesJson.features.image.uid'
  | 'childFeaturesJson.features.image.gid'
  | 'childFeaturesJson.features.image.rdev'
  | 'childFeaturesJson.features.image.ino'
  | 'childFeaturesJson.features.image.atimeMs'
  | 'childFeaturesJson.features.image.mtimeMs'
  | 'childFeaturesJson.features.image.ctimeMs'
  | 'childFeaturesJson.features.image.atime'
  | 'childFeaturesJson.features.image.mtime'
  | 'childFeaturesJson.features.image.ctime'
  | 'childFeaturesJson.features.image.birthtime'
  | 'childFeaturesJson.features.image.birthtimeMs'
  | 'childFeaturesJson.features.image.blksize'
  | 'childFeaturesJson.features.image.blocks'
  | 'childFeaturesJson.features.image.publicURL'
  | 'childFeaturesJson.features.image.childrenImageSharp'
  | 'childFeaturesJson.features.image.childrenMarkdownRemark'
  | 'childFeaturesJson.features.image.childrenHeroJson'
  | 'childFeaturesJson.features.image.childrenFeaturesJson'
  | 'childFeaturesJson.features.image.childrenAboutJson'
  | 'childFeaturesJson.features.image.childrenContentJson'
  | 'childFeaturesJson.features.image.id'
  | 'childFeaturesJson.features.image.children'
  | 'childFeaturesJson.features.text'
  | 'childrenAboutJson'
  | 'childrenAboutJson.id'
  | 'childrenAboutJson.parent.id'
  | 'childrenAboutJson.parent.parent.id'
  | 'childrenAboutJson.parent.parent.children'
  | 'childrenAboutJson.parent.children'
  | 'childrenAboutJson.parent.children.id'
  | 'childrenAboutJson.parent.children.children'
  | 'childrenAboutJson.parent.internal.content'
  | 'childrenAboutJson.parent.internal.contentDigest'
  | 'childrenAboutJson.parent.internal.description'
  | 'childrenAboutJson.parent.internal.fieldOwners'
  | 'childrenAboutJson.parent.internal.ignoreType'
  | 'childrenAboutJson.parent.internal.mediaType'
  | 'childrenAboutJson.parent.internal.owner'
  | 'childrenAboutJson.parent.internal.type'
  | 'childrenAboutJson.children'
  | 'childrenAboutJson.children.id'
  | 'childrenAboutJson.children.parent.id'
  | 'childrenAboutJson.children.parent.children'
  | 'childrenAboutJson.children.children'
  | 'childrenAboutJson.children.children.id'
  | 'childrenAboutJson.children.children.children'
  | 'childrenAboutJson.children.internal.content'
  | 'childrenAboutJson.children.internal.contentDigest'
  | 'childrenAboutJson.children.internal.description'
  | 'childrenAboutJson.children.internal.fieldOwners'
  | 'childrenAboutJson.children.internal.ignoreType'
  | 'childrenAboutJson.children.internal.mediaType'
  | 'childrenAboutJson.children.internal.owner'
  | 'childrenAboutJson.children.internal.type'
  | 'childrenAboutJson.internal.content'
  | 'childrenAboutJson.internal.contentDigest'
  | 'childrenAboutJson.internal.description'
  | 'childrenAboutJson.internal.fieldOwners'
  | 'childrenAboutJson.internal.ignoreType'
  | 'childrenAboutJson.internal.mediaType'
  | 'childrenAboutJson.internal.owner'
  | 'childrenAboutJson.internal.type'
  | 'childrenAboutJson.body'
  | 'childrenAboutJson.title'
  | 'childrenAboutJson.image.sourceInstanceName'
  | 'childrenAboutJson.image.absolutePath'
  | 'childrenAboutJson.image.relativePath'
  | 'childrenAboutJson.image.extension'
  | 'childrenAboutJson.image.size'
  | 'childrenAboutJson.image.prettySize'
  | 'childrenAboutJson.image.modifiedTime'
  | 'childrenAboutJson.image.accessTime'
  | 'childrenAboutJson.image.changeTime'
  | 'childrenAboutJson.image.birthTime'
  | 'childrenAboutJson.image.root'
  | 'childrenAboutJson.image.dir'
  | 'childrenAboutJson.image.base'
  | 'childrenAboutJson.image.ext'
  | 'childrenAboutJson.image.name'
  | 'childrenAboutJson.image.relativeDirectory'
  | 'childrenAboutJson.image.dev'
  | 'childrenAboutJson.image.mode'
  | 'childrenAboutJson.image.nlink'
  | 'childrenAboutJson.image.uid'
  | 'childrenAboutJson.image.gid'
  | 'childrenAboutJson.image.rdev'
  | 'childrenAboutJson.image.ino'
  | 'childrenAboutJson.image.atimeMs'
  | 'childrenAboutJson.image.mtimeMs'
  | 'childrenAboutJson.image.ctimeMs'
  | 'childrenAboutJson.image.atime'
  | 'childrenAboutJson.image.mtime'
  | 'childrenAboutJson.image.ctime'
  | 'childrenAboutJson.image.birthtime'
  | 'childrenAboutJson.image.birthtimeMs'
  | 'childrenAboutJson.image.blksize'
  | 'childrenAboutJson.image.blocks'
  | 'childrenAboutJson.image.publicURL'
  | 'childrenAboutJson.image.childrenImageSharp'
  | 'childrenAboutJson.image.childrenImageSharp.gatsbyImageData'
  | 'childrenAboutJson.image.childrenImageSharp.id'
  | 'childrenAboutJson.image.childrenImageSharp.children'
  | 'childrenAboutJson.image.childImageSharp.gatsbyImageData'
  | 'childrenAboutJson.image.childImageSharp.id'
  | 'childrenAboutJson.image.childImageSharp.children'
  | 'childrenAboutJson.image.childrenMarkdownRemark'
  | 'childrenAboutJson.image.childrenMarkdownRemark.id'
  | 'childrenAboutJson.image.childrenMarkdownRemark.excerpt'
  | 'childrenAboutJson.image.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenAboutJson.image.childrenMarkdownRemark.fileAbsolutePath'
  | 'childrenAboutJson.image.childrenMarkdownRemark.html'
  | 'childrenAboutJson.image.childrenMarkdownRemark.htmlAst'
  | 'childrenAboutJson.image.childrenMarkdownRemark.excerptAst'
  | 'childrenAboutJson.image.childrenMarkdownRemark.headings'
  | 'childrenAboutJson.image.childrenMarkdownRemark.timeToRead'
  | 'childrenAboutJson.image.childrenMarkdownRemark.tableOfContents'
  | 'childrenAboutJson.image.childrenMarkdownRemark.children'
  | 'childrenAboutJson.image.childMarkdownRemark.id'
  | 'childrenAboutJson.image.childMarkdownRemark.excerpt'
  | 'childrenAboutJson.image.childMarkdownRemark.rawMarkdownBody'
  | 'childrenAboutJson.image.childMarkdownRemark.fileAbsolutePath'
  | 'childrenAboutJson.image.childMarkdownRemark.html'
  | 'childrenAboutJson.image.childMarkdownRemark.htmlAst'
  | 'childrenAboutJson.image.childMarkdownRemark.excerptAst'
  | 'childrenAboutJson.image.childMarkdownRemark.headings'
  | 'childrenAboutJson.image.childMarkdownRemark.timeToRead'
  | 'childrenAboutJson.image.childMarkdownRemark.tableOfContents'
  | 'childrenAboutJson.image.childMarkdownRemark.children'
  | 'childrenAboutJson.image.childrenHeroJson'
  | 'childrenAboutJson.image.childrenHeroJson.id'
  | 'childrenAboutJson.image.childrenHeroJson.children'
  | 'childrenAboutJson.image.childrenHeroJson.title'
  | 'childrenAboutJson.image.childrenHeroJson.body'
  | 'childrenAboutJson.image.childHeroJson.id'
  | 'childrenAboutJson.image.childHeroJson.children'
  | 'childrenAboutJson.image.childHeroJson.title'
  | 'childrenAboutJson.image.childHeroJson.body'
  | 'childrenAboutJson.image.childrenFeaturesJson'
  | 'childrenAboutJson.image.childrenFeaturesJson.id'
  | 'childrenAboutJson.image.childrenFeaturesJson.children'
  | 'childrenAboutJson.image.childrenFeaturesJson.features'
  | 'childrenAboutJson.image.childFeaturesJson.id'
  | 'childrenAboutJson.image.childFeaturesJson.children'
  | 'childrenAboutJson.image.childFeaturesJson.features'
  | 'childrenAboutJson.image.childrenAboutJson'
  | 'childrenAboutJson.image.childrenAboutJson.id'
  | 'childrenAboutJson.image.childrenAboutJson.children'
  | 'childrenAboutJson.image.childrenAboutJson.body'
  | 'childrenAboutJson.image.childrenAboutJson.title'
  | 'childrenAboutJson.image.childrenAboutJson.chooseUs'
  | 'childrenAboutJson.image.childAboutJson.id'
  | 'childrenAboutJson.image.childAboutJson.children'
  | 'childrenAboutJson.image.childAboutJson.body'
  | 'childrenAboutJson.image.childAboutJson.title'
  | 'childrenAboutJson.image.childAboutJson.chooseUs'
  | 'childrenAboutJson.image.childrenContentJson'
  | 'childrenAboutJson.image.childrenContentJson.id'
  | 'childrenAboutJson.image.childrenContentJson.children'
  | 'childrenAboutJson.image.childrenContentJson.men'
  | 'childrenAboutJson.image.childrenContentJson.women'
  | 'childrenAboutJson.image.childrenContentJson.boys'
  | 'childrenAboutJson.image.childrenContentJson.girls'
  | 'childrenAboutJson.image.childContentJson.id'
  | 'childrenAboutJson.image.childContentJson.children'
  | 'childrenAboutJson.image.childContentJson.men'
  | 'childrenAboutJson.image.childContentJson.women'
  | 'childrenAboutJson.image.childContentJson.boys'
  | 'childrenAboutJson.image.childContentJson.girls'
  | 'childrenAboutJson.image.id'
  | 'childrenAboutJson.image.parent.id'
  | 'childrenAboutJson.image.parent.children'
  | 'childrenAboutJson.image.children'
  | 'childrenAboutJson.image.children.id'
  | 'childrenAboutJson.image.children.children'
  | 'childrenAboutJson.image.internal.content'
  | 'childrenAboutJson.image.internal.contentDigest'
  | 'childrenAboutJson.image.internal.description'
  | 'childrenAboutJson.image.internal.fieldOwners'
  | 'childrenAboutJson.image.internal.ignoreType'
  | 'childrenAboutJson.image.internal.mediaType'
  | 'childrenAboutJson.image.internal.owner'
  | 'childrenAboutJson.image.internal.type'
  | 'childrenAboutJson.chooseUs'
  | 'childrenAboutJson.chooseUs.image.sourceInstanceName'
  | 'childrenAboutJson.chooseUs.image.absolutePath'
  | 'childrenAboutJson.chooseUs.image.relativePath'
  | 'childrenAboutJson.chooseUs.image.extension'
  | 'childrenAboutJson.chooseUs.image.size'
  | 'childrenAboutJson.chooseUs.image.prettySize'
  | 'childrenAboutJson.chooseUs.image.modifiedTime'
  | 'childrenAboutJson.chooseUs.image.accessTime'
  | 'childrenAboutJson.chooseUs.image.changeTime'
  | 'childrenAboutJson.chooseUs.image.birthTime'
  | 'childrenAboutJson.chooseUs.image.root'
  | 'childrenAboutJson.chooseUs.image.dir'
  | 'childrenAboutJson.chooseUs.image.base'
  | 'childrenAboutJson.chooseUs.image.ext'
  | 'childrenAboutJson.chooseUs.image.name'
  | 'childrenAboutJson.chooseUs.image.relativeDirectory'
  | 'childrenAboutJson.chooseUs.image.dev'
  | 'childrenAboutJson.chooseUs.image.mode'
  | 'childrenAboutJson.chooseUs.image.nlink'
  | 'childrenAboutJson.chooseUs.image.uid'
  | 'childrenAboutJson.chooseUs.image.gid'
  | 'childrenAboutJson.chooseUs.image.rdev'
  | 'childrenAboutJson.chooseUs.image.ino'
  | 'childrenAboutJson.chooseUs.image.atimeMs'
  | 'childrenAboutJson.chooseUs.image.mtimeMs'
  | 'childrenAboutJson.chooseUs.image.ctimeMs'
  | 'childrenAboutJson.chooseUs.image.atime'
  | 'childrenAboutJson.chooseUs.image.mtime'
  | 'childrenAboutJson.chooseUs.image.ctime'
  | 'childrenAboutJson.chooseUs.image.birthtime'
  | 'childrenAboutJson.chooseUs.image.birthtimeMs'
  | 'childrenAboutJson.chooseUs.image.blksize'
  | 'childrenAboutJson.chooseUs.image.blocks'
  | 'childrenAboutJson.chooseUs.image.publicURL'
  | 'childrenAboutJson.chooseUs.image.childrenImageSharp'
  | 'childrenAboutJson.chooseUs.image.childrenMarkdownRemark'
  | 'childrenAboutJson.chooseUs.image.childrenHeroJson'
  | 'childrenAboutJson.chooseUs.image.childrenFeaturesJson'
  | 'childrenAboutJson.chooseUs.image.childrenAboutJson'
  | 'childrenAboutJson.chooseUs.image.childrenContentJson'
  | 'childrenAboutJson.chooseUs.image.id'
  | 'childrenAboutJson.chooseUs.image.children'
  | 'childrenAboutJson.chooseUs.text'
  | 'childrenAboutJson.chooseUs.title'
  | 'childAboutJson.id'
  | 'childAboutJson.parent.id'
  | 'childAboutJson.parent.parent.id'
  | 'childAboutJson.parent.parent.children'
  | 'childAboutJson.parent.children'
  | 'childAboutJson.parent.children.id'
  | 'childAboutJson.parent.children.children'
  | 'childAboutJson.parent.internal.content'
  | 'childAboutJson.parent.internal.contentDigest'
  | 'childAboutJson.parent.internal.description'
  | 'childAboutJson.parent.internal.fieldOwners'
  | 'childAboutJson.parent.internal.ignoreType'
  | 'childAboutJson.parent.internal.mediaType'
  | 'childAboutJson.parent.internal.owner'
  | 'childAboutJson.parent.internal.type'
  | 'childAboutJson.children'
  | 'childAboutJson.children.id'
  | 'childAboutJson.children.parent.id'
  | 'childAboutJson.children.parent.children'
  | 'childAboutJson.children.children'
  | 'childAboutJson.children.children.id'
  | 'childAboutJson.children.children.children'
  | 'childAboutJson.children.internal.content'
  | 'childAboutJson.children.internal.contentDigest'
  | 'childAboutJson.children.internal.description'
  | 'childAboutJson.children.internal.fieldOwners'
  | 'childAboutJson.children.internal.ignoreType'
  | 'childAboutJson.children.internal.mediaType'
  | 'childAboutJson.children.internal.owner'
  | 'childAboutJson.children.internal.type'
  | 'childAboutJson.internal.content'
  | 'childAboutJson.internal.contentDigest'
  | 'childAboutJson.internal.description'
  | 'childAboutJson.internal.fieldOwners'
  | 'childAboutJson.internal.ignoreType'
  | 'childAboutJson.internal.mediaType'
  | 'childAboutJson.internal.owner'
  | 'childAboutJson.internal.type'
  | 'childAboutJson.body'
  | 'childAboutJson.title'
  | 'childAboutJson.image.sourceInstanceName'
  | 'childAboutJson.image.absolutePath'
  | 'childAboutJson.image.relativePath'
  | 'childAboutJson.image.extension'
  | 'childAboutJson.image.size'
  | 'childAboutJson.image.prettySize'
  | 'childAboutJson.image.modifiedTime'
  | 'childAboutJson.image.accessTime'
  | 'childAboutJson.image.changeTime'
  | 'childAboutJson.image.birthTime'
  | 'childAboutJson.image.root'
  | 'childAboutJson.image.dir'
  | 'childAboutJson.image.base'
  | 'childAboutJson.image.ext'
  | 'childAboutJson.image.name'
  | 'childAboutJson.image.relativeDirectory'
  | 'childAboutJson.image.dev'
  | 'childAboutJson.image.mode'
  | 'childAboutJson.image.nlink'
  | 'childAboutJson.image.uid'
  | 'childAboutJson.image.gid'
  | 'childAboutJson.image.rdev'
  | 'childAboutJson.image.ino'
  | 'childAboutJson.image.atimeMs'
  | 'childAboutJson.image.mtimeMs'
  | 'childAboutJson.image.ctimeMs'
  | 'childAboutJson.image.atime'
  | 'childAboutJson.image.mtime'
  | 'childAboutJson.image.ctime'
  | 'childAboutJson.image.birthtime'
  | 'childAboutJson.image.birthtimeMs'
  | 'childAboutJson.image.blksize'
  | 'childAboutJson.image.blocks'
  | 'childAboutJson.image.publicURL'
  | 'childAboutJson.image.childrenImageSharp'
  | 'childAboutJson.image.childrenImageSharp.gatsbyImageData'
  | 'childAboutJson.image.childrenImageSharp.id'
  | 'childAboutJson.image.childrenImageSharp.children'
  | 'childAboutJson.image.childImageSharp.gatsbyImageData'
  | 'childAboutJson.image.childImageSharp.id'
  | 'childAboutJson.image.childImageSharp.children'
  | 'childAboutJson.image.childrenMarkdownRemark'
  | 'childAboutJson.image.childrenMarkdownRemark.id'
  | 'childAboutJson.image.childrenMarkdownRemark.excerpt'
  | 'childAboutJson.image.childrenMarkdownRemark.rawMarkdownBody'
  | 'childAboutJson.image.childrenMarkdownRemark.fileAbsolutePath'
  | 'childAboutJson.image.childrenMarkdownRemark.html'
  | 'childAboutJson.image.childrenMarkdownRemark.htmlAst'
  | 'childAboutJson.image.childrenMarkdownRemark.excerptAst'
  | 'childAboutJson.image.childrenMarkdownRemark.headings'
  | 'childAboutJson.image.childrenMarkdownRemark.timeToRead'
  | 'childAboutJson.image.childrenMarkdownRemark.tableOfContents'
  | 'childAboutJson.image.childrenMarkdownRemark.children'
  | 'childAboutJson.image.childMarkdownRemark.id'
  | 'childAboutJson.image.childMarkdownRemark.excerpt'
  | 'childAboutJson.image.childMarkdownRemark.rawMarkdownBody'
  | 'childAboutJson.image.childMarkdownRemark.fileAbsolutePath'
  | 'childAboutJson.image.childMarkdownRemark.html'
  | 'childAboutJson.image.childMarkdownRemark.htmlAst'
  | 'childAboutJson.image.childMarkdownRemark.excerptAst'
  | 'childAboutJson.image.childMarkdownRemark.headings'
  | 'childAboutJson.image.childMarkdownRemark.timeToRead'
  | 'childAboutJson.image.childMarkdownRemark.tableOfContents'
  | 'childAboutJson.image.childMarkdownRemark.children'
  | 'childAboutJson.image.childrenHeroJson'
  | 'childAboutJson.image.childrenHeroJson.id'
  | 'childAboutJson.image.childrenHeroJson.children'
  | 'childAboutJson.image.childrenHeroJson.title'
  | 'childAboutJson.image.childrenHeroJson.body'
  | 'childAboutJson.image.childHeroJson.id'
  | 'childAboutJson.image.childHeroJson.children'
  | 'childAboutJson.image.childHeroJson.title'
  | 'childAboutJson.image.childHeroJson.body'
  | 'childAboutJson.image.childrenFeaturesJson'
  | 'childAboutJson.image.childrenFeaturesJson.id'
  | 'childAboutJson.image.childrenFeaturesJson.children'
  | 'childAboutJson.image.childrenFeaturesJson.features'
  | 'childAboutJson.image.childFeaturesJson.id'
  | 'childAboutJson.image.childFeaturesJson.children'
  | 'childAboutJson.image.childFeaturesJson.features'
  | 'childAboutJson.image.childrenAboutJson'
  | 'childAboutJson.image.childrenAboutJson.id'
  | 'childAboutJson.image.childrenAboutJson.children'
  | 'childAboutJson.image.childrenAboutJson.body'
  | 'childAboutJson.image.childrenAboutJson.title'
  | 'childAboutJson.image.childrenAboutJson.chooseUs'
  | 'childAboutJson.image.childAboutJson.id'
  | 'childAboutJson.image.childAboutJson.children'
  | 'childAboutJson.image.childAboutJson.body'
  | 'childAboutJson.image.childAboutJson.title'
  | 'childAboutJson.image.childAboutJson.chooseUs'
  | 'childAboutJson.image.childrenContentJson'
  | 'childAboutJson.image.childrenContentJson.id'
  | 'childAboutJson.image.childrenContentJson.children'
  | 'childAboutJson.image.childrenContentJson.men'
  | 'childAboutJson.image.childrenContentJson.women'
  | 'childAboutJson.image.childrenContentJson.boys'
  | 'childAboutJson.image.childrenContentJson.girls'
  | 'childAboutJson.image.childContentJson.id'
  | 'childAboutJson.image.childContentJson.children'
  | 'childAboutJson.image.childContentJson.men'
  | 'childAboutJson.image.childContentJson.women'
  | 'childAboutJson.image.childContentJson.boys'
  | 'childAboutJson.image.childContentJson.girls'
  | 'childAboutJson.image.id'
  | 'childAboutJson.image.parent.id'
  | 'childAboutJson.image.parent.children'
  | 'childAboutJson.image.children'
  | 'childAboutJson.image.children.id'
  | 'childAboutJson.image.children.children'
  | 'childAboutJson.image.internal.content'
  | 'childAboutJson.image.internal.contentDigest'
  | 'childAboutJson.image.internal.description'
  | 'childAboutJson.image.internal.fieldOwners'
  | 'childAboutJson.image.internal.ignoreType'
  | 'childAboutJson.image.internal.mediaType'
  | 'childAboutJson.image.internal.owner'
  | 'childAboutJson.image.internal.type'
  | 'childAboutJson.chooseUs'
  | 'childAboutJson.chooseUs.image.sourceInstanceName'
  | 'childAboutJson.chooseUs.image.absolutePath'
  | 'childAboutJson.chooseUs.image.relativePath'
  | 'childAboutJson.chooseUs.image.extension'
  | 'childAboutJson.chooseUs.image.size'
  | 'childAboutJson.chooseUs.image.prettySize'
  | 'childAboutJson.chooseUs.image.modifiedTime'
  | 'childAboutJson.chooseUs.image.accessTime'
  | 'childAboutJson.chooseUs.image.changeTime'
  | 'childAboutJson.chooseUs.image.birthTime'
  | 'childAboutJson.chooseUs.image.root'
  | 'childAboutJson.chooseUs.image.dir'
  | 'childAboutJson.chooseUs.image.base'
  | 'childAboutJson.chooseUs.image.ext'
  | 'childAboutJson.chooseUs.image.name'
  | 'childAboutJson.chooseUs.image.relativeDirectory'
  | 'childAboutJson.chooseUs.image.dev'
  | 'childAboutJson.chooseUs.image.mode'
  | 'childAboutJson.chooseUs.image.nlink'
  | 'childAboutJson.chooseUs.image.uid'
  | 'childAboutJson.chooseUs.image.gid'
  | 'childAboutJson.chooseUs.image.rdev'
  | 'childAboutJson.chooseUs.image.ino'
  | 'childAboutJson.chooseUs.image.atimeMs'
  | 'childAboutJson.chooseUs.image.mtimeMs'
  | 'childAboutJson.chooseUs.image.ctimeMs'
  | 'childAboutJson.chooseUs.image.atime'
  | 'childAboutJson.chooseUs.image.mtime'
  | 'childAboutJson.chooseUs.image.ctime'
  | 'childAboutJson.chooseUs.image.birthtime'
  | 'childAboutJson.chooseUs.image.birthtimeMs'
  | 'childAboutJson.chooseUs.image.blksize'
  | 'childAboutJson.chooseUs.image.blocks'
  | 'childAboutJson.chooseUs.image.publicURL'
  | 'childAboutJson.chooseUs.image.childrenImageSharp'
  | 'childAboutJson.chooseUs.image.childrenMarkdownRemark'
  | 'childAboutJson.chooseUs.image.childrenHeroJson'
  | 'childAboutJson.chooseUs.image.childrenFeaturesJson'
  | 'childAboutJson.chooseUs.image.childrenAboutJson'
  | 'childAboutJson.chooseUs.image.childrenContentJson'
  | 'childAboutJson.chooseUs.image.id'
  | 'childAboutJson.chooseUs.image.children'
  | 'childAboutJson.chooseUs.text'
  | 'childAboutJson.chooseUs.title'
  | 'childrenContentJson'
  | 'childrenContentJson.id'
  | 'childrenContentJson.parent.id'
  | 'childrenContentJson.parent.parent.id'
  | 'childrenContentJson.parent.parent.children'
  | 'childrenContentJson.parent.children'
  | 'childrenContentJson.parent.children.id'
  | 'childrenContentJson.parent.children.children'
  | 'childrenContentJson.parent.internal.content'
  | 'childrenContentJson.parent.internal.contentDigest'
  | 'childrenContentJson.parent.internal.description'
  | 'childrenContentJson.parent.internal.fieldOwners'
  | 'childrenContentJson.parent.internal.ignoreType'
  | 'childrenContentJson.parent.internal.mediaType'
  | 'childrenContentJson.parent.internal.owner'
  | 'childrenContentJson.parent.internal.type'
  | 'childrenContentJson.children'
  | 'childrenContentJson.children.id'
  | 'childrenContentJson.children.parent.id'
  | 'childrenContentJson.children.parent.children'
  | 'childrenContentJson.children.children'
  | 'childrenContentJson.children.children.id'
  | 'childrenContentJson.children.children.children'
  | 'childrenContentJson.children.internal.content'
  | 'childrenContentJson.children.internal.contentDigest'
  | 'childrenContentJson.children.internal.description'
  | 'childrenContentJson.children.internal.fieldOwners'
  | 'childrenContentJson.children.internal.ignoreType'
  | 'childrenContentJson.children.internal.mediaType'
  | 'childrenContentJson.children.internal.owner'
  | 'childrenContentJson.children.internal.type'
  | 'childrenContentJson.internal.content'
  | 'childrenContentJson.internal.contentDigest'
  | 'childrenContentJson.internal.description'
  | 'childrenContentJson.internal.fieldOwners'
  | 'childrenContentJson.internal.ignoreType'
  | 'childrenContentJson.internal.mediaType'
  | 'childrenContentJson.internal.owner'
  | 'childrenContentJson.internal.type'
  | 'childrenContentJson.men'
  | 'childrenContentJson.men.category'
  | 'childrenContentJson.women'
  | 'childrenContentJson.women.category'
  | 'childrenContentJson.boys'
  | 'childrenContentJson.boys.category'
  | 'childrenContentJson.girls'
  | 'childrenContentJson.girls.category'
  | 'childContentJson.id'
  | 'childContentJson.parent.id'
  | 'childContentJson.parent.parent.id'
  | 'childContentJson.parent.parent.children'
  | 'childContentJson.parent.children'
  | 'childContentJson.parent.children.id'
  | 'childContentJson.parent.children.children'
  | 'childContentJson.parent.internal.content'
  | 'childContentJson.parent.internal.contentDigest'
  | 'childContentJson.parent.internal.description'
  | 'childContentJson.parent.internal.fieldOwners'
  | 'childContentJson.parent.internal.ignoreType'
  | 'childContentJson.parent.internal.mediaType'
  | 'childContentJson.parent.internal.owner'
  | 'childContentJson.parent.internal.type'
  | 'childContentJson.children'
  | 'childContentJson.children.id'
  | 'childContentJson.children.parent.id'
  | 'childContentJson.children.parent.children'
  | 'childContentJson.children.children'
  | 'childContentJson.children.children.id'
  | 'childContentJson.children.children.children'
  | 'childContentJson.children.internal.content'
  | 'childContentJson.children.internal.contentDigest'
  | 'childContentJson.children.internal.description'
  | 'childContentJson.children.internal.fieldOwners'
  | 'childContentJson.children.internal.ignoreType'
  | 'childContentJson.children.internal.mediaType'
  | 'childContentJson.children.internal.owner'
  | 'childContentJson.children.internal.type'
  | 'childContentJson.internal.content'
  | 'childContentJson.internal.contentDigest'
  | 'childContentJson.internal.description'
  | 'childContentJson.internal.fieldOwners'
  | 'childContentJson.internal.ignoreType'
  | 'childContentJson.internal.mediaType'
  | 'childContentJson.internal.owner'
  | 'childContentJson.internal.type'
  | 'childContentJson.men'
  | 'childContentJson.men.category'
  | 'childContentJson.women'
  | 'childContentJson.women.category'
  | 'childContentJson.boys'
  | 'childContentJson.boys.category'
  | 'childContentJson.girls'
  | 'childContentJson.girls.category'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'apiRoute'
  | 'originalFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly apiRoute: Maybe<StringQueryOperatorInput>;
  readonly originalFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly categories: Maybe<StringQueryOperatorInput>;
  readonly pageNumber: Maybe<IntQueryOperatorInput>;
  readonly humanPageNumber: Maybe<IntQueryOperatorInput>;
  readonly skip: Maybe<IntQueryOperatorInput>;
  readonly limit: Maybe<IntQueryOperatorInput>;
  readonly numberOfPages: Maybe<IntQueryOperatorInput>;
  readonly previousPagePath: Maybe<StringQueryOperatorInput>;
  readonly nextPagePath: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly enableIdentityWidget: Maybe<BooleanQueryOperatorInput>;
  readonly manualInit: Maybe<BooleanQueryOperatorInput>;
  readonly modulePath: Maybe<StringQueryOperatorInput>;
  readonly publicPath: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly engine: Maybe<StringQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly ref: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<StringQueryOperatorInput>;
  readonly store: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly commonmark: Maybe<BooleanQueryOperatorInput>;
  readonly footnotes: Maybe<BooleanQueryOperatorInput>;
  readonly pedantic: Maybe<BooleanQueryOperatorInput>;
  readonly gfm: Maybe<BooleanQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly cssLoaderOptions: Maybe<SitePluginPluginOptionsCssLoaderOptionsFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsCssLoaderOptionsFilterInput = {
  readonly esModule: Maybe<BooleanQueryOperatorInput>;
  readonly modules: Maybe<SitePluginPluginOptionsCssLoaderOptionsModulesFilterInput>;
};

type SitePluginPluginOptionsCssLoaderOptionsModulesFilterInput = {
  readonly namedExport: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsAliasesFilterInput = {
  readonly _: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.id'
  | 'context.type'
  | 'context.categories'
  | 'context.pageNumber'
  | 'context.humanPageNumber'
  | 'context.skip'
  | 'context.limit'
  | 'context.numberOfPages'
  | 'context.previousPagePath'
  | 'context.nextPagePath'
  | 'context.category'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.plugins'
  | 'pluginCreator.pluginOptions.plugins.resolve'
  | 'pluginCreator.pluginOptions.plugins.id'
  | 'pluginCreator.pluginOptions.plugins.name'
  | 'pluginCreator.pluginOptions.plugins.version'
  | 'pluginCreator.pluginOptions.plugins.nodeAPIs'
  | 'pluginCreator.pluginOptions.plugins.browserAPIs'
  | 'pluginCreator.pluginOptions.plugins.pluginFilepath'
  | 'pluginCreator.pluginOptions.enableIdentityWidget'
  | 'pluginCreator.pluginOptions.manualInit'
  | 'pluginCreator.pluginOptions.modulePath'
  | 'pluginCreator.pluginOptions.publicPath'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.engine'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.ref'
  | 'pluginCreator.pluginOptions.index'
  | 'pluginCreator.pluginOptions.store'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.commonmark'
  | 'pluginCreator.pluginOptions.footnotes'
  | 'pluginCreator.pluginOptions.pedantic'
  | 'pluginCreator.pluginOptions.gfm'
  | 'pluginCreator.pluginOptions.maxWidth'
  | 'pluginCreator.pluginOptions.linkImagesToOriginal'
  | 'pluginCreator.pluginOptions.showCaptions'
  | 'pluginCreator.pluginOptions.markdownCaptions'
  | 'pluginCreator.pluginOptions.sizeByPixelDensity'
  | 'pluginCreator.pluginOptions.backgroundColor'
  | 'pluginCreator.pluginOptions.quality'
  | 'pluginCreator.pluginOptions.withWebp'
  | 'pluginCreator.pluginOptions.tracedSVG'
  | 'pluginCreator.pluginOptions.loading'
  | 'pluginCreator.pluginOptions.disableBgImageOnAlpha'
  | 'pluginCreator.pluginOptions.disableBgImage'
  | 'pluginCreator.pluginOptions.cssLoaderOptions.esModule'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.aliases._'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type LocalSearchAllProductsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocalSearchAllProductsEdge>;
  readonly nodes: ReadonlyArray<LocalSearchAllProducts>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LocalSearchAllProductsGroupConnection>;
};


type LocalSearchAllProductsConnection_distinctArgs = {
  field: LocalSearchAllProductsFieldsEnum;
};


type LocalSearchAllProductsConnection_maxArgs = {
  field: LocalSearchAllProductsFieldsEnum;
};


type LocalSearchAllProductsConnection_minArgs = {
  field: LocalSearchAllProductsFieldsEnum;
};


type LocalSearchAllProductsConnection_sumArgs = {
  field: LocalSearchAllProductsFieldsEnum;
};


type LocalSearchAllProductsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LocalSearchAllProductsFieldsEnum;
};

type LocalSearchAllProductsEdge = {
  readonly next: Maybe<LocalSearchAllProducts>;
  readonly node: LocalSearchAllProducts;
  readonly previous: Maybe<LocalSearchAllProducts>;
};

type LocalSearchAllProductsFieldsEnum =
  | 'name'
  | 'engine'
  | 'index'
  | 'store'
  | 'publicIndexURL'
  | 'publicStoreURL'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type LocalSearchAllProductsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocalSearchAllProductsEdge>;
  readonly nodes: ReadonlyArray<LocalSearchAllProducts>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type LocalSearchAllProductsFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly engine: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<StringQueryOperatorInput>;
  readonly store: Maybe<JSONQueryOperatorInput>;
  readonly publicIndexURL: Maybe<StringQueryOperatorInput>;
  readonly publicStoreURL: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type LocalSearchAllProductsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<LocalSearchAllProductsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'frontmatter.layout'
  | 'frontmatter.type'
  | 'frontmatter.hidden'
  | 'frontmatter.discount'
  | 'frontmatter.careatedAt'
  | 'frontmatter.imagePreview.sourceInstanceName'
  | 'frontmatter.imagePreview.absolutePath'
  | 'frontmatter.imagePreview.relativePath'
  | 'frontmatter.imagePreview.extension'
  | 'frontmatter.imagePreview.size'
  | 'frontmatter.imagePreview.prettySize'
  | 'frontmatter.imagePreview.modifiedTime'
  | 'frontmatter.imagePreview.accessTime'
  | 'frontmatter.imagePreview.changeTime'
  | 'frontmatter.imagePreview.birthTime'
  | 'frontmatter.imagePreview.root'
  | 'frontmatter.imagePreview.dir'
  | 'frontmatter.imagePreview.base'
  | 'frontmatter.imagePreview.ext'
  | 'frontmatter.imagePreview.name'
  | 'frontmatter.imagePreview.relativeDirectory'
  | 'frontmatter.imagePreview.dev'
  | 'frontmatter.imagePreview.mode'
  | 'frontmatter.imagePreview.nlink'
  | 'frontmatter.imagePreview.uid'
  | 'frontmatter.imagePreview.gid'
  | 'frontmatter.imagePreview.rdev'
  | 'frontmatter.imagePreview.ino'
  | 'frontmatter.imagePreview.atimeMs'
  | 'frontmatter.imagePreview.mtimeMs'
  | 'frontmatter.imagePreview.ctimeMs'
  | 'frontmatter.imagePreview.atime'
  | 'frontmatter.imagePreview.mtime'
  | 'frontmatter.imagePreview.ctime'
  | 'frontmatter.imagePreview.birthtime'
  | 'frontmatter.imagePreview.birthtimeMs'
  | 'frontmatter.imagePreview.blksize'
  | 'frontmatter.imagePreview.blocks'
  | 'frontmatter.imagePreview.publicURL'
  | 'frontmatter.imagePreview.childrenImageSharp'
  | 'frontmatter.imagePreview.childrenImageSharp.gatsbyImageData'
  | 'frontmatter.imagePreview.childrenImageSharp.id'
  | 'frontmatter.imagePreview.childrenImageSharp.children'
  | 'frontmatter.imagePreview.childImageSharp.gatsbyImageData'
  | 'frontmatter.imagePreview.childImageSharp.id'
  | 'frontmatter.imagePreview.childImageSharp.children'
  | 'frontmatter.imagePreview.childrenMarkdownRemark'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.id'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.excerpt'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.rawMarkdownBody'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.fileAbsolutePath'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.html'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.htmlAst'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.excerptAst'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.headings'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.timeToRead'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.tableOfContents'
  | 'frontmatter.imagePreview.childrenMarkdownRemark.children'
  | 'frontmatter.imagePreview.childMarkdownRemark.id'
  | 'frontmatter.imagePreview.childMarkdownRemark.excerpt'
  | 'frontmatter.imagePreview.childMarkdownRemark.rawMarkdownBody'
  | 'frontmatter.imagePreview.childMarkdownRemark.fileAbsolutePath'
  | 'frontmatter.imagePreview.childMarkdownRemark.html'
  | 'frontmatter.imagePreview.childMarkdownRemark.htmlAst'
  | 'frontmatter.imagePreview.childMarkdownRemark.excerptAst'
  | 'frontmatter.imagePreview.childMarkdownRemark.headings'
  | 'frontmatter.imagePreview.childMarkdownRemark.timeToRead'
  | 'frontmatter.imagePreview.childMarkdownRemark.tableOfContents'
  | 'frontmatter.imagePreview.childMarkdownRemark.children'
  | 'frontmatter.imagePreview.childrenHeroJson'
  | 'frontmatter.imagePreview.childrenHeroJson.id'
  | 'frontmatter.imagePreview.childrenHeroJson.children'
  | 'frontmatter.imagePreview.childrenHeroJson.title'
  | 'frontmatter.imagePreview.childrenHeroJson.body'
  | 'frontmatter.imagePreview.childHeroJson.id'
  | 'frontmatter.imagePreview.childHeroJson.children'
  | 'frontmatter.imagePreview.childHeroJson.title'
  | 'frontmatter.imagePreview.childHeroJson.body'
  | 'frontmatter.imagePreview.childrenFeaturesJson'
  | 'frontmatter.imagePreview.childrenFeaturesJson.id'
  | 'frontmatter.imagePreview.childrenFeaturesJson.children'
  | 'frontmatter.imagePreview.childrenFeaturesJson.features'
  | 'frontmatter.imagePreview.childFeaturesJson.id'
  | 'frontmatter.imagePreview.childFeaturesJson.children'
  | 'frontmatter.imagePreview.childFeaturesJson.features'
  | 'frontmatter.imagePreview.childrenAboutJson'
  | 'frontmatter.imagePreview.childrenAboutJson.id'
  | 'frontmatter.imagePreview.childrenAboutJson.children'
  | 'frontmatter.imagePreview.childrenAboutJson.body'
  | 'frontmatter.imagePreview.childrenAboutJson.title'
  | 'frontmatter.imagePreview.childrenAboutJson.chooseUs'
  | 'frontmatter.imagePreview.childAboutJson.id'
  | 'frontmatter.imagePreview.childAboutJson.children'
  | 'frontmatter.imagePreview.childAboutJson.body'
  | 'frontmatter.imagePreview.childAboutJson.title'
  | 'frontmatter.imagePreview.childAboutJson.chooseUs'
  | 'frontmatter.imagePreview.childrenContentJson'
  | 'frontmatter.imagePreview.childrenContentJson.id'
  | 'frontmatter.imagePreview.childrenContentJson.children'
  | 'frontmatter.imagePreview.childrenContentJson.men'
  | 'frontmatter.imagePreview.childrenContentJson.women'
  | 'frontmatter.imagePreview.childrenContentJson.boys'
  | 'frontmatter.imagePreview.childrenContentJson.girls'
  | 'frontmatter.imagePreview.childContentJson.id'
  | 'frontmatter.imagePreview.childContentJson.children'
  | 'frontmatter.imagePreview.childContentJson.men'
  | 'frontmatter.imagePreview.childContentJson.women'
  | 'frontmatter.imagePreview.childContentJson.boys'
  | 'frontmatter.imagePreview.childContentJson.girls'
  | 'frontmatter.imagePreview.id'
  | 'frontmatter.imagePreview.parent.id'
  | 'frontmatter.imagePreview.parent.children'
  | 'frontmatter.imagePreview.children'
  | 'frontmatter.imagePreview.children.id'
  | 'frontmatter.imagePreview.children.children'
  | 'frontmatter.imagePreview.internal.content'
  | 'frontmatter.imagePreview.internal.contentDigest'
  | 'frontmatter.imagePreview.internal.description'
  | 'frontmatter.imagePreview.internal.fieldOwners'
  | 'frontmatter.imagePreview.internal.ignoreType'
  | 'frontmatter.imagePreview.internal.mediaType'
  | 'frontmatter.imagePreview.internal.owner'
  | 'frontmatter.imagePreview.internal.type'
  | 'frontmatter.images'
  | 'frontmatter.images.image.sourceInstanceName'
  | 'frontmatter.images.image.absolutePath'
  | 'frontmatter.images.image.relativePath'
  | 'frontmatter.images.image.extension'
  | 'frontmatter.images.image.size'
  | 'frontmatter.images.image.prettySize'
  | 'frontmatter.images.image.modifiedTime'
  | 'frontmatter.images.image.accessTime'
  | 'frontmatter.images.image.changeTime'
  | 'frontmatter.images.image.birthTime'
  | 'frontmatter.images.image.root'
  | 'frontmatter.images.image.dir'
  | 'frontmatter.images.image.base'
  | 'frontmatter.images.image.ext'
  | 'frontmatter.images.image.name'
  | 'frontmatter.images.image.relativeDirectory'
  | 'frontmatter.images.image.dev'
  | 'frontmatter.images.image.mode'
  | 'frontmatter.images.image.nlink'
  | 'frontmatter.images.image.uid'
  | 'frontmatter.images.image.gid'
  | 'frontmatter.images.image.rdev'
  | 'frontmatter.images.image.ino'
  | 'frontmatter.images.image.atimeMs'
  | 'frontmatter.images.image.mtimeMs'
  | 'frontmatter.images.image.ctimeMs'
  | 'frontmatter.images.image.atime'
  | 'frontmatter.images.image.mtime'
  | 'frontmatter.images.image.ctime'
  | 'frontmatter.images.image.birthtime'
  | 'frontmatter.images.image.birthtimeMs'
  | 'frontmatter.images.image.blksize'
  | 'frontmatter.images.image.blocks'
  | 'frontmatter.images.image.publicURL'
  | 'frontmatter.images.image.childrenImageSharp'
  | 'frontmatter.images.image.childrenMarkdownRemark'
  | 'frontmatter.images.image.childrenHeroJson'
  | 'frontmatter.images.image.childrenFeaturesJson'
  | 'frontmatter.images.image.childrenAboutJson'
  | 'frontmatter.images.image.childrenContentJson'
  | 'frontmatter.images.image.id'
  | 'frontmatter.images.image.children'
  | 'frontmatter.price'
  | 'frontmatter.category'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type HeroJsonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<HeroJsonEdge>;
  readonly nodes: ReadonlyArray<HeroJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<HeroJsonGroupConnection>;
};


type HeroJsonConnection_distinctArgs = {
  field: HeroJsonFieldsEnum;
};


type HeroJsonConnection_maxArgs = {
  field: HeroJsonFieldsEnum;
};


type HeroJsonConnection_minArgs = {
  field: HeroJsonFieldsEnum;
};


type HeroJsonConnection_sumArgs = {
  field: HeroJsonFieldsEnum;
};


type HeroJsonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: HeroJsonFieldsEnum;
};

type HeroJsonEdge = {
  readonly next: Maybe<HeroJson>;
  readonly node: HeroJson;
  readonly previous: Maybe<HeroJson>;
};

type HeroJsonFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'title'
  | 'body'
  | 'image.sourceInstanceName'
  | 'image.absolutePath'
  | 'image.relativePath'
  | 'image.extension'
  | 'image.size'
  | 'image.prettySize'
  | 'image.modifiedTime'
  | 'image.accessTime'
  | 'image.changeTime'
  | 'image.birthTime'
  | 'image.root'
  | 'image.dir'
  | 'image.base'
  | 'image.ext'
  | 'image.name'
  | 'image.relativeDirectory'
  | 'image.dev'
  | 'image.mode'
  | 'image.nlink'
  | 'image.uid'
  | 'image.gid'
  | 'image.rdev'
  | 'image.ino'
  | 'image.atimeMs'
  | 'image.mtimeMs'
  | 'image.ctimeMs'
  | 'image.atime'
  | 'image.mtime'
  | 'image.ctime'
  | 'image.birthtime'
  | 'image.birthtimeMs'
  | 'image.blksize'
  | 'image.blocks'
  | 'image.publicURL'
  | 'image.childrenImageSharp'
  | 'image.childrenImageSharp.fixed.base64'
  | 'image.childrenImageSharp.fixed.tracedSVG'
  | 'image.childrenImageSharp.fixed.aspectRatio'
  | 'image.childrenImageSharp.fixed.width'
  | 'image.childrenImageSharp.fixed.height'
  | 'image.childrenImageSharp.fixed.src'
  | 'image.childrenImageSharp.fixed.srcSet'
  | 'image.childrenImageSharp.fixed.srcWebp'
  | 'image.childrenImageSharp.fixed.srcSetWebp'
  | 'image.childrenImageSharp.fixed.originalName'
  | 'image.childrenImageSharp.fluid.base64'
  | 'image.childrenImageSharp.fluid.tracedSVG'
  | 'image.childrenImageSharp.fluid.aspectRatio'
  | 'image.childrenImageSharp.fluid.src'
  | 'image.childrenImageSharp.fluid.srcSet'
  | 'image.childrenImageSharp.fluid.srcWebp'
  | 'image.childrenImageSharp.fluid.srcSetWebp'
  | 'image.childrenImageSharp.fluid.sizes'
  | 'image.childrenImageSharp.fluid.originalImg'
  | 'image.childrenImageSharp.fluid.originalName'
  | 'image.childrenImageSharp.fluid.presentationWidth'
  | 'image.childrenImageSharp.fluid.presentationHeight'
  | 'image.childrenImageSharp.gatsbyImageData'
  | 'image.childrenImageSharp.original.width'
  | 'image.childrenImageSharp.original.height'
  | 'image.childrenImageSharp.original.src'
  | 'image.childrenImageSharp.resize.src'
  | 'image.childrenImageSharp.resize.tracedSVG'
  | 'image.childrenImageSharp.resize.width'
  | 'image.childrenImageSharp.resize.height'
  | 'image.childrenImageSharp.resize.aspectRatio'
  | 'image.childrenImageSharp.resize.originalName'
  | 'image.childrenImageSharp.id'
  | 'image.childrenImageSharp.parent.id'
  | 'image.childrenImageSharp.parent.children'
  | 'image.childrenImageSharp.children'
  | 'image.childrenImageSharp.children.id'
  | 'image.childrenImageSharp.children.children'
  | 'image.childrenImageSharp.internal.content'
  | 'image.childrenImageSharp.internal.contentDigest'
  | 'image.childrenImageSharp.internal.description'
  | 'image.childrenImageSharp.internal.fieldOwners'
  | 'image.childrenImageSharp.internal.ignoreType'
  | 'image.childrenImageSharp.internal.mediaType'
  | 'image.childrenImageSharp.internal.owner'
  | 'image.childrenImageSharp.internal.type'
  | 'image.childImageSharp.fixed.base64'
  | 'image.childImageSharp.fixed.tracedSVG'
  | 'image.childImageSharp.fixed.aspectRatio'
  | 'image.childImageSharp.fixed.width'
  | 'image.childImageSharp.fixed.height'
  | 'image.childImageSharp.fixed.src'
  | 'image.childImageSharp.fixed.srcSet'
  | 'image.childImageSharp.fixed.srcWebp'
  | 'image.childImageSharp.fixed.srcSetWebp'
  | 'image.childImageSharp.fixed.originalName'
  | 'image.childImageSharp.fluid.base64'
  | 'image.childImageSharp.fluid.tracedSVG'
  | 'image.childImageSharp.fluid.aspectRatio'
  | 'image.childImageSharp.fluid.src'
  | 'image.childImageSharp.fluid.srcSet'
  | 'image.childImageSharp.fluid.srcWebp'
  | 'image.childImageSharp.fluid.srcSetWebp'
  | 'image.childImageSharp.fluid.sizes'
  | 'image.childImageSharp.fluid.originalImg'
  | 'image.childImageSharp.fluid.originalName'
  | 'image.childImageSharp.fluid.presentationWidth'
  | 'image.childImageSharp.fluid.presentationHeight'
  | 'image.childImageSharp.gatsbyImageData'
  | 'image.childImageSharp.original.width'
  | 'image.childImageSharp.original.height'
  | 'image.childImageSharp.original.src'
  | 'image.childImageSharp.resize.src'
  | 'image.childImageSharp.resize.tracedSVG'
  | 'image.childImageSharp.resize.width'
  | 'image.childImageSharp.resize.height'
  | 'image.childImageSharp.resize.aspectRatio'
  | 'image.childImageSharp.resize.originalName'
  | 'image.childImageSharp.id'
  | 'image.childImageSharp.parent.id'
  | 'image.childImageSharp.parent.children'
  | 'image.childImageSharp.children'
  | 'image.childImageSharp.children.id'
  | 'image.childImageSharp.children.children'
  | 'image.childImageSharp.internal.content'
  | 'image.childImageSharp.internal.contentDigest'
  | 'image.childImageSharp.internal.description'
  | 'image.childImageSharp.internal.fieldOwners'
  | 'image.childImageSharp.internal.ignoreType'
  | 'image.childImageSharp.internal.mediaType'
  | 'image.childImageSharp.internal.owner'
  | 'image.childImageSharp.internal.type'
  | 'image.childrenMarkdownRemark'
  | 'image.childrenMarkdownRemark.id'
  | 'image.childrenMarkdownRemark.frontmatter.title'
  | 'image.childrenMarkdownRemark.frontmatter.layout'
  | 'image.childrenMarkdownRemark.frontmatter.type'
  | 'image.childrenMarkdownRemark.frontmatter.hidden'
  | 'image.childrenMarkdownRemark.frontmatter.discount'
  | 'image.childrenMarkdownRemark.frontmatter.careatedAt'
  | 'image.childrenMarkdownRemark.frontmatter.images'
  | 'image.childrenMarkdownRemark.frontmatter.price'
  | 'image.childrenMarkdownRemark.frontmatter.category'
  | 'image.childrenMarkdownRemark.excerpt'
  | 'image.childrenMarkdownRemark.rawMarkdownBody'
  | 'image.childrenMarkdownRemark.fileAbsolutePath'
  | 'image.childrenMarkdownRemark.html'
  | 'image.childrenMarkdownRemark.htmlAst'
  | 'image.childrenMarkdownRemark.excerptAst'
  | 'image.childrenMarkdownRemark.headings'
  | 'image.childrenMarkdownRemark.headings.id'
  | 'image.childrenMarkdownRemark.headings.value'
  | 'image.childrenMarkdownRemark.headings.depth'
  | 'image.childrenMarkdownRemark.timeToRead'
  | 'image.childrenMarkdownRemark.tableOfContents'
  | 'image.childrenMarkdownRemark.wordCount.paragraphs'
  | 'image.childrenMarkdownRemark.wordCount.sentences'
  | 'image.childrenMarkdownRemark.wordCount.words'
  | 'image.childrenMarkdownRemark.parent.id'
  | 'image.childrenMarkdownRemark.parent.children'
  | 'image.childrenMarkdownRemark.children'
  | 'image.childrenMarkdownRemark.children.id'
  | 'image.childrenMarkdownRemark.children.children'
  | 'image.childrenMarkdownRemark.internal.content'
  | 'image.childrenMarkdownRemark.internal.contentDigest'
  | 'image.childrenMarkdownRemark.internal.description'
  | 'image.childrenMarkdownRemark.internal.fieldOwners'
  | 'image.childrenMarkdownRemark.internal.ignoreType'
  | 'image.childrenMarkdownRemark.internal.mediaType'
  | 'image.childrenMarkdownRemark.internal.owner'
  | 'image.childrenMarkdownRemark.internal.type'
  | 'image.childMarkdownRemark.id'
  | 'image.childMarkdownRemark.frontmatter.title'
  | 'image.childMarkdownRemark.frontmatter.layout'
  | 'image.childMarkdownRemark.frontmatter.type'
  | 'image.childMarkdownRemark.frontmatter.hidden'
  | 'image.childMarkdownRemark.frontmatter.discount'
  | 'image.childMarkdownRemark.frontmatter.careatedAt'
  | 'image.childMarkdownRemark.frontmatter.images'
  | 'image.childMarkdownRemark.frontmatter.price'
  | 'image.childMarkdownRemark.frontmatter.category'
  | 'image.childMarkdownRemark.excerpt'
  | 'image.childMarkdownRemark.rawMarkdownBody'
  | 'image.childMarkdownRemark.fileAbsolutePath'
  | 'image.childMarkdownRemark.html'
  | 'image.childMarkdownRemark.htmlAst'
  | 'image.childMarkdownRemark.excerptAst'
  | 'image.childMarkdownRemark.headings'
  | 'image.childMarkdownRemark.headings.id'
  | 'image.childMarkdownRemark.headings.value'
  | 'image.childMarkdownRemark.headings.depth'
  | 'image.childMarkdownRemark.timeToRead'
  | 'image.childMarkdownRemark.tableOfContents'
  | 'image.childMarkdownRemark.wordCount.paragraphs'
  | 'image.childMarkdownRemark.wordCount.sentences'
  | 'image.childMarkdownRemark.wordCount.words'
  | 'image.childMarkdownRemark.parent.id'
  | 'image.childMarkdownRemark.parent.children'
  | 'image.childMarkdownRemark.children'
  | 'image.childMarkdownRemark.children.id'
  | 'image.childMarkdownRemark.children.children'
  | 'image.childMarkdownRemark.internal.content'
  | 'image.childMarkdownRemark.internal.contentDigest'
  | 'image.childMarkdownRemark.internal.description'
  | 'image.childMarkdownRemark.internal.fieldOwners'
  | 'image.childMarkdownRemark.internal.ignoreType'
  | 'image.childMarkdownRemark.internal.mediaType'
  | 'image.childMarkdownRemark.internal.owner'
  | 'image.childMarkdownRemark.internal.type'
  | 'image.childrenHeroJson'
  | 'image.childrenHeroJson.id'
  | 'image.childrenHeroJson.parent.id'
  | 'image.childrenHeroJson.parent.children'
  | 'image.childrenHeroJson.children'
  | 'image.childrenHeroJson.children.id'
  | 'image.childrenHeroJson.children.children'
  | 'image.childrenHeroJson.internal.content'
  | 'image.childrenHeroJson.internal.contentDigest'
  | 'image.childrenHeroJson.internal.description'
  | 'image.childrenHeroJson.internal.fieldOwners'
  | 'image.childrenHeroJson.internal.ignoreType'
  | 'image.childrenHeroJson.internal.mediaType'
  | 'image.childrenHeroJson.internal.owner'
  | 'image.childrenHeroJson.internal.type'
  | 'image.childrenHeroJson.title'
  | 'image.childrenHeroJson.body'
  | 'image.childrenHeroJson.image.sourceInstanceName'
  | 'image.childrenHeroJson.image.absolutePath'
  | 'image.childrenHeroJson.image.relativePath'
  | 'image.childrenHeroJson.image.extension'
  | 'image.childrenHeroJson.image.size'
  | 'image.childrenHeroJson.image.prettySize'
  | 'image.childrenHeroJson.image.modifiedTime'
  | 'image.childrenHeroJson.image.accessTime'
  | 'image.childrenHeroJson.image.changeTime'
  | 'image.childrenHeroJson.image.birthTime'
  | 'image.childrenHeroJson.image.root'
  | 'image.childrenHeroJson.image.dir'
  | 'image.childrenHeroJson.image.base'
  | 'image.childrenHeroJson.image.ext'
  | 'image.childrenHeroJson.image.name'
  | 'image.childrenHeroJson.image.relativeDirectory'
  | 'image.childrenHeroJson.image.dev'
  | 'image.childrenHeroJson.image.mode'
  | 'image.childrenHeroJson.image.nlink'
  | 'image.childrenHeroJson.image.uid'
  | 'image.childrenHeroJson.image.gid'
  | 'image.childrenHeroJson.image.rdev'
  | 'image.childrenHeroJson.image.ino'
  | 'image.childrenHeroJson.image.atimeMs'
  | 'image.childrenHeroJson.image.mtimeMs'
  | 'image.childrenHeroJson.image.ctimeMs'
  | 'image.childrenHeroJson.image.atime'
  | 'image.childrenHeroJson.image.mtime'
  | 'image.childrenHeroJson.image.ctime'
  | 'image.childrenHeroJson.image.birthtime'
  | 'image.childrenHeroJson.image.birthtimeMs'
  | 'image.childrenHeroJson.image.blksize'
  | 'image.childrenHeroJson.image.blocks'
  | 'image.childrenHeroJson.image.publicURL'
  | 'image.childrenHeroJson.image.childrenImageSharp'
  | 'image.childrenHeroJson.image.childrenMarkdownRemark'
  | 'image.childrenHeroJson.image.childrenHeroJson'
  | 'image.childrenHeroJson.image.childrenFeaturesJson'
  | 'image.childrenHeroJson.image.childrenAboutJson'
  | 'image.childrenHeroJson.image.childrenContentJson'
  | 'image.childrenHeroJson.image.id'
  | 'image.childrenHeroJson.image.children'
  | 'image.childHeroJson.id'
  | 'image.childHeroJson.parent.id'
  | 'image.childHeroJson.parent.children'
  | 'image.childHeroJson.children'
  | 'image.childHeroJson.children.id'
  | 'image.childHeroJson.children.children'
  | 'image.childHeroJson.internal.content'
  | 'image.childHeroJson.internal.contentDigest'
  | 'image.childHeroJson.internal.description'
  | 'image.childHeroJson.internal.fieldOwners'
  | 'image.childHeroJson.internal.ignoreType'
  | 'image.childHeroJson.internal.mediaType'
  | 'image.childHeroJson.internal.owner'
  | 'image.childHeroJson.internal.type'
  | 'image.childHeroJson.title'
  | 'image.childHeroJson.body'
  | 'image.childHeroJson.image.sourceInstanceName'
  | 'image.childHeroJson.image.absolutePath'
  | 'image.childHeroJson.image.relativePath'
  | 'image.childHeroJson.image.extension'
  | 'image.childHeroJson.image.size'
  | 'image.childHeroJson.image.prettySize'
  | 'image.childHeroJson.image.modifiedTime'
  | 'image.childHeroJson.image.accessTime'
  | 'image.childHeroJson.image.changeTime'
  | 'image.childHeroJson.image.birthTime'
  | 'image.childHeroJson.image.root'
  | 'image.childHeroJson.image.dir'
  | 'image.childHeroJson.image.base'
  | 'image.childHeroJson.image.ext'
  | 'image.childHeroJson.image.name'
  | 'image.childHeroJson.image.relativeDirectory'
  | 'image.childHeroJson.image.dev'
  | 'image.childHeroJson.image.mode'
  | 'image.childHeroJson.image.nlink'
  | 'image.childHeroJson.image.uid'
  | 'image.childHeroJson.image.gid'
  | 'image.childHeroJson.image.rdev'
  | 'image.childHeroJson.image.ino'
  | 'image.childHeroJson.image.atimeMs'
  | 'image.childHeroJson.image.mtimeMs'
  | 'image.childHeroJson.image.ctimeMs'
  | 'image.childHeroJson.image.atime'
  | 'image.childHeroJson.image.mtime'
  | 'image.childHeroJson.image.ctime'
  | 'image.childHeroJson.image.birthtime'
  | 'image.childHeroJson.image.birthtimeMs'
  | 'image.childHeroJson.image.blksize'
  | 'image.childHeroJson.image.blocks'
  | 'image.childHeroJson.image.publicURL'
  | 'image.childHeroJson.image.childrenImageSharp'
  | 'image.childHeroJson.image.childrenMarkdownRemark'
  | 'image.childHeroJson.image.childrenHeroJson'
  | 'image.childHeroJson.image.childrenFeaturesJson'
  | 'image.childHeroJson.image.childrenAboutJson'
  | 'image.childHeroJson.image.childrenContentJson'
  | 'image.childHeroJson.image.id'
  | 'image.childHeroJson.image.children'
  | 'image.childrenFeaturesJson'
  | 'image.childrenFeaturesJson.id'
  | 'image.childrenFeaturesJson.parent.id'
  | 'image.childrenFeaturesJson.parent.children'
  | 'image.childrenFeaturesJson.children'
  | 'image.childrenFeaturesJson.children.id'
  | 'image.childrenFeaturesJson.children.children'
  | 'image.childrenFeaturesJson.internal.content'
  | 'image.childrenFeaturesJson.internal.contentDigest'
  | 'image.childrenFeaturesJson.internal.description'
  | 'image.childrenFeaturesJson.internal.fieldOwners'
  | 'image.childrenFeaturesJson.internal.ignoreType'
  | 'image.childrenFeaturesJson.internal.mediaType'
  | 'image.childrenFeaturesJson.internal.owner'
  | 'image.childrenFeaturesJson.internal.type'
  | 'image.childrenFeaturesJson.features'
  | 'image.childrenFeaturesJson.features.text'
  | 'image.childFeaturesJson.id'
  | 'image.childFeaturesJson.parent.id'
  | 'image.childFeaturesJson.parent.children'
  | 'image.childFeaturesJson.children'
  | 'image.childFeaturesJson.children.id'
  | 'image.childFeaturesJson.children.children'
  | 'image.childFeaturesJson.internal.content'
  | 'image.childFeaturesJson.internal.contentDigest'
  | 'image.childFeaturesJson.internal.description'
  | 'image.childFeaturesJson.internal.fieldOwners'
  | 'image.childFeaturesJson.internal.ignoreType'
  | 'image.childFeaturesJson.internal.mediaType'
  | 'image.childFeaturesJson.internal.owner'
  | 'image.childFeaturesJson.internal.type'
  | 'image.childFeaturesJson.features'
  | 'image.childFeaturesJson.features.text'
  | 'image.childrenAboutJson'
  | 'image.childrenAboutJson.id'
  | 'image.childrenAboutJson.parent.id'
  | 'image.childrenAboutJson.parent.children'
  | 'image.childrenAboutJson.children'
  | 'image.childrenAboutJson.children.id'
  | 'image.childrenAboutJson.children.children'
  | 'image.childrenAboutJson.internal.content'
  | 'image.childrenAboutJson.internal.contentDigest'
  | 'image.childrenAboutJson.internal.description'
  | 'image.childrenAboutJson.internal.fieldOwners'
  | 'image.childrenAboutJson.internal.ignoreType'
  | 'image.childrenAboutJson.internal.mediaType'
  | 'image.childrenAboutJson.internal.owner'
  | 'image.childrenAboutJson.internal.type'
  | 'image.childrenAboutJson.body'
  | 'image.childrenAboutJson.title'
  | 'image.childrenAboutJson.image.sourceInstanceName'
  | 'image.childrenAboutJson.image.absolutePath'
  | 'image.childrenAboutJson.image.relativePath'
  | 'image.childrenAboutJson.image.extension'
  | 'image.childrenAboutJson.image.size'
  | 'image.childrenAboutJson.image.prettySize'
  | 'image.childrenAboutJson.image.modifiedTime'
  | 'image.childrenAboutJson.image.accessTime'
  | 'image.childrenAboutJson.image.changeTime'
  | 'image.childrenAboutJson.image.birthTime'
  | 'image.childrenAboutJson.image.root'
  | 'image.childrenAboutJson.image.dir'
  | 'image.childrenAboutJson.image.base'
  | 'image.childrenAboutJson.image.ext'
  | 'image.childrenAboutJson.image.name'
  | 'image.childrenAboutJson.image.relativeDirectory'
  | 'image.childrenAboutJson.image.dev'
  | 'image.childrenAboutJson.image.mode'
  | 'image.childrenAboutJson.image.nlink'
  | 'image.childrenAboutJson.image.uid'
  | 'image.childrenAboutJson.image.gid'
  | 'image.childrenAboutJson.image.rdev'
  | 'image.childrenAboutJson.image.ino'
  | 'image.childrenAboutJson.image.atimeMs'
  | 'image.childrenAboutJson.image.mtimeMs'
  | 'image.childrenAboutJson.image.ctimeMs'
  | 'image.childrenAboutJson.image.atime'
  | 'image.childrenAboutJson.image.mtime'
  | 'image.childrenAboutJson.image.ctime'
  | 'image.childrenAboutJson.image.birthtime'
  | 'image.childrenAboutJson.image.birthtimeMs'
  | 'image.childrenAboutJson.image.blksize'
  | 'image.childrenAboutJson.image.blocks'
  | 'image.childrenAboutJson.image.publicURL'
  | 'image.childrenAboutJson.image.childrenImageSharp'
  | 'image.childrenAboutJson.image.childrenMarkdownRemark'
  | 'image.childrenAboutJson.image.childrenHeroJson'
  | 'image.childrenAboutJson.image.childrenFeaturesJson'
  | 'image.childrenAboutJson.image.childrenAboutJson'
  | 'image.childrenAboutJson.image.childrenContentJson'
  | 'image.childrenAboutJson.image.id'
  | 'image.childrenAboutJson.image.children'
  | 'image.childrenAboutJson.chooseUs'
  | 'image.childrenAboutJson.chooseUs.text'
  | 'image.childrenAboutJson.chooseUs.title'
  | 'image.childAboutJson.id'
  | 'image.childAboutJson.parent.id'
  | 'image.childAboutJson.parent.children'
  | 'image.childAboutJson.children'
  | 'image.childAboutJson.children.id'
  | 'image.childAboutJson.children.children'
  | 'image.childAboutJson.internal.content'
  | 'image.childAboutJson.internal.contentDigest'
  | 'image.childAboutJson.internal.description'
  | 'image.childAboutJson.internal.fieldOwners'
  | 'image.childAboutJson.internal.ignoreType'
  | 'image.childAboutJson.internal.mediaType'
  | 'image.childAboutJson.internal.owner'
  | 'image.childAboutJson.internal.type'
  | 'image.childAboutJson.body'
  | 'image.childAboutJson.title'
  | 'image.childAboutJson.image.sourceInstanceName'
  | 'image.childAboutJson.image.absolutePath'
  | 'image.childAboutJson.image.relativePath'
  | 'image.childAboutJson.image.extension'
  | 'image.childAboutJson.image.size'
  | 'image.childAboutJson.image.prettySize'
  | 'image.childAboutJson.image.modifiedTime'
  | 'image.childAboutJson.image.accessTime'
  | 'image.childAboutJson.image.changeTime'
  | 'image.childAboutJson.image.birthTime'
  | 'image.childAboutJson.image.root'
  | 'image.childAboutJson.image.dir'
  | 'image.childAboutJson.image.base'
  | 'image.childAboutJson.image.ext'
  | 'image.childAboutJson.image.name'
  | 'image.childAboutJson.image.relativeDirectory'
  | 'image.childAboutJson.image.dev'
  | 'image.childAboutJson.image.mode'
  | 'image.childAboutJson.image.nlink'
  | 'image.childAboutJson.image.uid'
  | 'image.childAboutJson.image.gid'
  | 'image.childAboutJson.image.rdev'
  | 'image.childAboutJson.image.ino'
  | 'image.childAboutJson.image.atimeMs'
  | 'image.childAboutJson.image.mtimeMs'
  | 'image.childAboutJson.image.ctimeMs'
  | 'image.childAboutJson.image.atime'
  | 'image.childAboutJson.image.mtime'
  | 'image.childAboutJson.image.ctime'
  | 'image.childAboutJson.image.birthtime'
  | 'image.childAboutJson.image.birthtimeMs'
  | 'image.childAboutJson.image.blksize'
  | 'image.childAboutJson.image.blocks'
  | 'image.childAboutJson.image.publicURL'
  | 'image.childAboutJson.image.childrenImageSharp'
  | 'image.childAboutJson.image.childrenMarkdownRemark'
  | 'image.childAboutJson.image.childrenHeroJson'
  | 'image.childAboutJson.image.childrenFeaturesJson'
  | 'image.childAboutJson.image.childrenAboutJson'
  | 'image.childAboutJson.image.childrenContentJson'
  | 'image.childAboutJson.image.id'
  | 'image.childAboutJson.image.children'
  | 'image.childAboutJson.chooseUs'
  | 'image.childAboutJson.chooseUs.text'
  | 'image.childAboutJson.chooseUs.title'
  | 'image.childrenContentJson'
  | 'image.childrenContentJson.id'
  | 'image.childrenContentJson.parent.id'
  | 'image.childrenContentJson.parent.children'
  | 'image.childrenContentJson.children'
  | 'image.childrenContentJson.children.id'
  | 'image.childrenContentJson.children.children'
  | 'image.childrenContentJson.internal.content'
  | 'image.childrenContentJson.internal.contentDigest'
  | 'image.childrenContentJson.internal.description'
  | 'image.childrenContentJson.internal.fieldOwners'
  | 'image.childrenContentJson.internal.ignoreType'
  | 'image.childrenContentJson.internal.mediaType'
  | 'image.childrenContentJson.internal.owner'
  | 'image.childrenContentJson.internal.type'
  | 'image.childrenContentJson.men'
  | 'image.childrenContentJson.men.category'
  | 'image.childrenContentJson.women'
  | 'image.childrenContentJson.women.category'
  | 'image.childrenContentJson.boys'
  | 'image.childrenContentJson.boys.category'
  | 'image.childrenContentJson.girls'
  | 'image.childrenContentJson.girls.category'
  | 'image.childContentJson.id'
  | 'image.childContentJson.parent.id'
  | 'image.childContentJson.parent.children'
  | 'image.childContentJson.children'
  | 'image.childContentJson.children.id'
  | 'image.childContentJson.children.children'
  | 'image.childContentJson.internal.content'
  | 'image.childContentJson.internal.contentDigest'
  | 'image.childContentJson.internal.description'
  | 'image.childContentJson.internal.fieldOwners'
  | 'image.childContentJson.internal.ignoreType'
  | 'image.childContentJson.internal.mediaType'
  | 'image.childContentJson.internal.owner'
  | 'image.childContentJson.internal.type'
  | 'image.childContentJson.men'
  | 'image.childContentJson.men.category'
  | 'image.childContentJson.women'
  | 'image.childContentJson.women.category'
  | 'image.childContentJson.boys'
  | 'image.childContentJson.boys.category'
  | 'image.childContentJson.girls'
  | 'image.childContentJson.girls.category'
  | 'image.id'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type';

type HeroJsonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<HeroJsonEdge>;
  readonly nodes: ReadonlyArray<HeroJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type HeroJsonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<HeroJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FeaturesJsonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FeaturesJsonEdge>;
  readonly nodes: ReadonlyArray<FeaturesJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FeaturesJsonGroupConnection>;
};


type FeaturesJsonConnection_distinctArgs = {
  field: FeaturesJsonFieldsEnum;
};


type FeaturesJsonConnection_maxArgs = {
  field: FeaturesJsonFieldsEnum;
};


type FeaturesJsonConnection_minArgs = {
  field: FeaturesJsonFieldsEnum;
};


type FeaturesJsonConnection_sumArgs = {
  field: FeaturesJsonFieldsEnum;
};


type FeaturesJsonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FeaturesJsonFieldsEnum;
};

type FeaturesJsonEdge = {
  readonly next: Maybe<FeaturesJson>;
  readonly node: FeaturesJson;
  readonly previous: Maybe<FeaturesJson>;
};

type FeaturesJsonFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'features'
  | 'features.image.sourceInstanceName'
  | 'features.image.absolutePath'
  | 'features.image.relativePath'
  | 'features.image.extension'
  | 'features.image.size'
  | 'features.image.prettySize'
  | 'features.image.modifiedTime'
  | 'features.image.accessTime'
  | 'features.image.changeTime'
  | 'features.image.birthTime'
  | 'features.image.root'
  | 'features.image.dir'
  | 'features.image.base'
  | 'features.image.ext'
  | 'features.image.name'
  | 'features.image.relativeDirectory'
  | 'features.image.dev'
  | 'features.image.mode'
  | 'features.image.nlink'
  | 'features.image.uid'
  | 'features.image.gid'
  | 'features.image.rdev'
  | 'features.image.ino'
  | 'features.image.atimeMs'
  | 'features.image.mtimeMs'
  | 'features.image.ctimeMs'
  | 'features.image.atime'
  | 'features.image.mtime'
  | 'features.image.ctime'
  | 'features.image.birthtime'
  | 'features.image.birthtimeMs'
  | 'features.image.blksize'
  | 'features.image.blocks'
  | 'features.image.publicURL'
  | 'features.image.childrenImageSharp'
  | 'features.image.childrenImageSharp.gatsbyImageData'
  | 'features.image.childrenImageSharp.id'
  | 'features.image.childrenImageSharp.children'
  | 'features.image.childImageSharp.gatsbyImageData'
  | 'features.image.childImageSharp.id'
  | 'features.image.childImageSharp.children'
  | 'features.image.childrenMarkdownRemark'
  | 'features.image.childrenMarkdownRemark.id'
  | 'features.image.childrenMarkdownRemark.excerpt'
  | 'features.image.childrenMarkdownRemark.rawMarkdownBody'
  | 'features.image.childrenMarkdownRemark.fileAbsolutePath'
  | 'features.image.childrenMarkdownRemark.html'
  | 'features.image.childrenMarkdownRemark.htmlAst'
  | 'features.image.childrenMarkdownRemark.excerptAst'
  | 'features.image.childrenMarkdownRemark.headings'
  | 'features.image.childrenMarkdownRemark.timeToRead'
  | 'features.image.childrenMarkdownRemark.tableOfContents'
  | 'features.image.childrenMarkdownRemark.children'
  | 'features.image.childMarkdownRemark.id'
  | 'features.image.childMarkdownRemark.excerpt'
  | 'features.image.childMarkdownRemark.rawMarkdownBody'
  | 'features.image.childMarkdownRemark.fileAbsolutePath'
  | 'features.image.childMarkdownRemark.html'
  | 'features.image.childMarkdownRemark.htmlAst'
  | 'features.image.childMarkdownRemark.excerptAst'
  | 'features.image.childMarkdownRemark.headings'
  | 'features.image.childMarkdownRemark.timeToRead'
  | 'features.image.childMarkdownRemark.tableOfContents'
  | 'features.image.childMarkdownRemark.children'
  | 'features.image.childrenHeroJson'
  | 'features.image.childrenHeroJson.id'
  | 'features.image.childrenHeroJson.children'
  | 'features.image.childrenHeroJson.title'
  | 'features.image.childrenHeroJson.body'
  | 'features.image.childHeroJson.id'
  | 'features.image.childHeroJson.children'
  | 'features.image.childHeroJson.title'
  | 'features.image.childHeroJson.body'
  | 'features.image.childrenFeaturesJson'
  | 'features.image.childrenFeaturesJson.id'
  | 'features.image.childrenFeaturesJson.children'
  | 'features.image.childrenFeaturesJson.features'
  | 'features.image.childFeaturesJson.id'
  | 'features.image.childFeaturesJson.children'
  | 'features.image.childFeaturesJson.features'
  | 'features.image.childrenAboutJson'
  | 'features.image.childrenAboutJson.id'
  | 'features.image.childrenAboutJson.children'
  | 'features.image.childrenAboutJson.body'
  | 'features.image.childrenAboutJson.title'
  | 'features.image.childrenAboutJson.chooseUs'
  | 'features.image.childAboutJson.id'
  | 'features.image.childAboutJson.children'
  | 'features.image.childAboutJson.body'
  | 'features.image.childAboutJson.title'
  | 'features.image.childAboutJson.chooseUs'
  | 'features.image.childrenContentJson'
  | 'features.image.childrenContentJson.id'
  | 'features.image.childrenContentJson.children'
  | 'features.image.childrenContentJson.men'
  | 'features.image.childrenContentJson.women'
  | 'features.image.childrenContentJson.boys'
  | 'features.image.childrenContentJson.girls'
  | 'features.image.childContentJson.id'
  | 'features.image.childContentJson.children'
  | 'features.image.childContentJson.men'
  | 'features.image.childContentJson.women'
  | 'features.image.childContentJson.boys'
  | 'features.image.childContentJson.girls'
  | 'features.image.id'
  | 'features.image.parent.id'
  | 'features.image.parent.children'
  | 'features.image.children'
  | 'features.image.children.id'
  | 'features.image.children.children'
  | 'features.image.internal.content'
  | 'features.image.internal.contentDigest'
  | 'features.image.internal.description'
  | 'features.image.internal.fieldOwners'
  | 'features.image.internal.ignoreType'
  | 'features.image.internal.mediaType'
  | 'features.image.internal.owner'
  | 'features.image.internal.type'
  | 'features.text';

type FeaturesJsonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FeaturesJsonEdge>;
  readonly nodes: ReadonlyArray<FeaturesJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FeaturesJsonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FeaturesJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type AboutJsonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AboutJsonEdge>;
  readonly nodes: ReadonlyArray<AboutJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<AboutJsonGroupConnection>;
};


type AboutJsonConnection_distinctArgs = {
  field: AboutJsonFieldsEnum;
};


type AboutJsonConnection_maxArgs = {
  field: AboutJsonFieldsEnum;
};


type AboutJsonConnection_minArgs = {
  field: AboutJsonFieldsEnum;
};


type AboutJsonConnection_sumArgs = {
  field: AboutJsonFieldsEnum;
};


type AboutJsonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: AboutJsonFieldsEnum;
};

type AboutJsonEdge = {
  readonly next: Maybe<AboutJson>;
  readonly node: AboutJson;
  readonly previous: Maybe<AboutJson>;
};

type AboutJsonFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'body'
  | 'title'
  | 'image.sourceInstanceName'
  | 'image.absolutePath'
  | 'image.relativePath'
  | 'image.extension'
  | 'image.size'
  | 'image.prettySize'
  | 'image.modifiedTime'
  | 'image.accessTime'
  | 'image.changeTime'
  | 'image.birthTime'
  | 'image.root'
  | 'image.dir'
  | 'image.base'
  | 'image.ext'
  | 'image.name'
  | 'image.relativeDirectory'
  | 'image.dev'
  | 'image.mode'
  | 'image.nlink'
  | 'image.uid'
  | 'image.gid'
  | 'image.rdev'
  | 'image.ino'
  | 'image.atimeMs'
  | 'image.mtimeMs'
  | 'image.ctimeMs'
  | 'image.atime'
  | 'image.mtime'
  | 'image.ctime'
  | 'image.birthtime'
  | 'image.birthtimeMs'
  | 'image.blksize'
  | 'image.blocks'
  | 'image.publicURL'
  | 'image.childrenImageSharp'
  | 'image.childrenImageSharp.fixed.base64'
  | 'image.childrenImageSharp.fixed.tracedSVG'
  | 'image.childrenImageSharp.fixed.aspectRatio'
  | 'image.childrenImageSharp.fixed.width'
  | 'image.childrenImageSharp.fixed.height'
  | 'image.childrenImageSharp.fixed.src'
  | 'image.childrenImageSharp.fixed.srcSet'
  | 'image.childrenImageSharp.fixed.srcWebp'
  | 'image.childrenImageSharp.fixed.srcSetWebp'
  | 'image.childrenImageSharp.fixed.originalName'
  | 'image.childrenImageSharp.fluid.base64'
  | 'image.childrenImageSharp.fluid.tracedSVG'
  | 'image.childrenImageSharp.fluid.aspectRatio'
  | 'image.childrenImageSharp.fluid.src'
  | 'image.childrenImageSharp.fluid.srcSet'
  | 'image.childrenImageSharp.fluid.srcWebp'
  | 'image.childrenImageSharp.fluid.srcSetWebp'
  | 'image.childrenImageSharp.fluid.sizes'
  | 'image.childrenImageSharp.fluid.originalImg'
  | 'image.childrenImageSharp.fluid.originalName'
  | 'image.childrenImageSharp.fluid.presentationWidth'
  | 'image.childrenImageSharp.fluid.presentationHeight'
  | 'image.childrenImageSharp.gatsbyImageData'
  | 'image.childrenImageSharp.original.width'
  | 'image.childrenImageSharp.original.height'
  | 'image.childrenImageSharp.original.src'
  | 'image.childrenImageSharp.resize.src'
  | 'image.childrenImageSharp.resize.tracedSVG'
  | 'image.childrenImageSharp.resize.width'
  | 'image.childrenImageSharp.resize.height'
  | 'image.childrenImageSharp.resize.aspectRatio'
  | 'image.childrenImageSharp.resize.originalName'
  | 'image.childrenImageSharp.id'
  | 'image.childrenImageSharp.parent.id'
  | 'image.childrenImageSharp.parent.children'
  | 'image.childrenImageSharp.children'
  | 'image.childrenImageSharp.children.id'
  | 'image.childrenImageSharp.children.children'
  | 'image.childrenImageSharp.internal.content'
  | 'image.childrenImageSharp.internal.contentDigest'
  | 'image.childrenImageSharp.internal.description'
  | 'image.childrenImageSharp.internal.fieldOwners'
  | 'image.childrenImageSharp.internal.ignoreType'
  | 'image.childrenImageSharp.internal.mediaType'
  | 'image.childrenImageSharp.internal.owner'
  | 'image.childrenImageSharp.internal.type'
  | 'image.childImageSharp.fixed.base64'
  | 'image.childImageSharp.fixed.tracedSVG'
  | 'image.childImageSharp.fixed.aspectRatio'
  | 'image.childImageSharp.fixed.width'
  | 'image.childImageSharp.fixed.height'
  | 'image.childImageSharp.fixed.src'
  | 'image.childImageSharp.fixed.srcSet'
  | 'image.childImageSharp.fixed.srcWebp'
  | 'image.childImageSharp.fixed.srcSetWebp'
  | 'image.childImageSharp.fixed.originalName'
  | 'image.childImageSharp.fluid.base64'
  | 'image.childImageSharp.fluid.tracedSVG'
  | 'image.childImageSharp.fluid.aspectRatio'
  | 'image.childImageSharp.fluid.src'
  | 'image.childImageSharp.fluid.srcSet'
  | 'image.childImageSharp.fluid.srcWebp'
  | 'image.childImageSharp.fluid.srcSetWebp'
  | 'image.childImageSharp.fluid.sizes'
  | 'image.childImageSharp.fluid.originalImg'
  | 'image.childImageSharp.fluid.originalName'
  | 'image.childImageSharp.fluid.presentationWidth'
  | 'image.childImageSharp.fluid.presentationHeight'
  | 'image.childImageSharp.gatsbyImageData'
  | 'image.childImageSharp.original.width'
  | 'image.childImageSharp.original.height'
  | 'image.childImageSharp.original.src'
  | 'image.childImageSharp.resize.src'
  | 'image.childImageSharp.resize.tracedSVG'
  | 'image.childImageSharp.resize.width'
  | 'image.childImageSharp.resize.height'
  | 'image.childImageSharp.resize.aspectRatio'
  | 'image.childImageSharp.resize.originalName'
  | 'image.childImageSharp.id'
  | 'image.childImageSharp.parent.id'
  | 'image.childImageSharp.parent.children'
  | 'image.childImageSharp.children'
  | 'image.childImageSharp.children.id'
  | 'image.childImageSharp.children.children'
  | 'image.childImageSharp.internal.content'
  | 'image.childImageSharp.internal.contentDigest'
  | 'image.childImageSharp.internal.description'
  | 'image.childImageSharp.internal.fieldOwners'
  | 'image.childImageSharp.internal.ignoreType'
  | 'image.childImageSharp.internal.mediaType'
  | 'image.childImageSharp.internal.owner'
  | 'image.childImageSharp.internal.type'
  | 'image.childrenMarkdownRemark'
  | 'image.childrenMarkdownRemark.id'
  | 'image.childrenMarkdownRemark.frontmatter.title'
  | 'image.childrenMarkdownRemark.frontmatter.layout'
  | 'image.childrenMarkdownRemark.frontmatter.type'
  | 'image.childrenMarkdownRemark.frontmatter.hidden'
  | 'image.childrenMarkdownRemark.frontmatter.discount'
  | 'image.childrenMarkdownRemark.frontmatter.careatedAt'
  | 'image.childrenMarkdownRemark.frontmatter.images'
  | 'image.childrenMarkdownRemark.frontmatter.price'
  | 'image.childrenMarkdownRemark.frontmatter.category'
  | 'image.childrenMarkdownRemark.excerpt'
  | 'image.childrenMarkdownRemark.rawMarkdownBody'
  | 'image.childrenMarkdownRemark.fileAbsolutePath'
  | 'image.childrenMarkdownRemark.html'
  | 'image.childrenMarkdownRemark.htmlAst'
  | 'image.childrenMarkdownRemark.excerptAst'
  | 'image.childrenMarkdownRemark.headings'
  | 'image.childrenMarkdownRemark.headings.id'
  | 'image.childrenMarkdownRemark.headings.value'
  | 'image.childrenMarkdownRemark.headings.depth'
  | 'image.childrenMarkdownRemark.timeToRead'
  | 'image.childrenMarkdownRemark.tableOfContents'
  | 'image.childrenMarkdownRemark.wordCount.paragraphs'
  | 'image.childrenMarkdownRemark.wordCount.sentences'
  | 'image.childrenMarkdownRemark.wordCount.words'
  | 'image.childrenMarkdownRemark.parent.id'
  | 'image.childrenMarkdownRemark.parent.children'
  | 'image.childrenMarkdownRemark.children'
  | 'image.childrenMarkdownRemark.children.id'
  | 'image.childrenMarkdownRemark.children.children'
  | 'image.childrenMarkdownRemark.internal.content'
  | 'image.childrenMarkdownRemark.internal.contentDigest'
  | 'image.childrenMarkdownRemark.internal.description'
  | 'image.childrenMarkdownRemark.internal.fieldOwners'
  | 'image.childrenMarkdownRemark.internal.ignoreType'
  | 'image.childrenMarkdownRemark.internal.mediaType'
  | 'image.childrenMarkdownRemark.internal.owner'
  | 'image.childrenMarkdownRemark.internal.type'
  | 'image.childMarkdownRemark.id'
  | 'image.childMarkdownRemark.frontmatter.title'
  | 'image.childMarkdownRemark.frontmatter.layout'
  | 'image.childMarkdownRemark.frontmatter.type'
  | 'image.childMarkdownRemark.frontmatter.hidden'
  | 'image.childMarkdownRemark.frontmatter.discount'
  | 'image.childMarkdownRemark.frontmatter.careatedAt'
  | 'image.childMarkdownRemark.frontmatter.images'
  | 'image.childMarkdownRemark.frontmatter.price'
  | 'image.childMarkdownRemark.frontmatter.category'
  | 'image.childMarkdownRemark.excerpt'
  | 'image.childMarkdownRemark.rawMarkdownBody'
  | 'image.childMarkdownRemark.fileAbsolutePath'
  | 'image.childMarkdownRemark.html'
  | 'image.childMarkdownRemark.htmlAst'
  | 'image.childMarkdownRemark.excerptAst'
  | 'image.childMarkdownRemark.headings'
  | 'image.childMarkdownRemark.headings.id'
  | 'image.childMarkdownRemark.headings.value'
  | 'image.childMarkdownRemark.headings.depth'
  | 'image.childMarkdownRemark.timeToRead'
  | 'image.childMarkdownRemark.tableOfContents'
  | 'image.childMarkdownRemark.wordCount.paragraphs'
  | 'image.childMarkdownRemark.wordCount.sentences'
  | 'image.childMarkdownRemark.wordCount.words'
  | 'image.childMarkdownRemark.parent.id'
  | 'image.childMarkdownRemark.parent.children'
  | 'image.childMarkdownRemark.children'
  | 'image.childMarkdownRemark.children.id'
  | 'image.childMarkdownRemark.children.children'
  | 'image.childMarkdownRemark.internal.content'
  | 'image.childMarkdownRemark.internal.contentDigest'
  | 'image.childMarkdownRemark.internal.description'
  | 'image.childMarkdownRemark.internal.fieldOwners'
  | 'image.childMarkdownRemark.internal.ignoreType'
  | 'image.childMarkdownRemark.internal.mediaType'
  | 'image.childMarkdownRemark.internal.owner'
  | 'image.childMarkdownRemark.internal.type'
  | 'image.childrenHeroJson'
  | 'image.childrenHeroJson.id'
  | 'image.childrenHeroJson.parent.id'
  | 'image.childrenHeroJson.parent.children'
  | 'image.childrenHeroJson.children'
  | 'image.childrenHeroJson.children.id'
  | 'image.childrenHeroJson.children.children'
  | 'image.childrenHeroJson.internal.content'
  | 'image.childrenHeroJson.internal.contentDigest'
  | 'image.childrenHeroJson.internal.description'
  | 'image.childrenHeroJson.internal.fieldOwners'
  | 'image.childrenHeroJson.internal.ignoreType'
  | 'image.childrenHeroJson.internal.mediaType'
  | 'image.childrenHeroJson.internal.owner'
  | 'image.childrenHeroJson.internal.type'
  | 'image.childrenHeroJson.title'
  | 'image.childrenHeroJson.body'
  | 'image.childrenHeroJson.image.sourceInstanceName'
  | 'image.childrenHeroJson.image.absolutePath'
  | 'image.childrenHeroJson.image.relativePath'
  | 'image.childrenHeroJson.image.extension'
  | 'image.childrenHeroJson.image.size'
  | 'image.childrenHeroJson.image.prettySize'
  | 'image.childrenHeroJson.image.modifiedTime'
  | 'image.childrenHeroJson.image.accessTime'
  | 'image.childrenHeroJson.image.changeTime'
  | 'image.childrenHeroJson.image.birthTime'
  | 'image.childrenHeroJson.image.root'
  | 'image.childrenHeroJson.image.dir'
  | 'image.childrenHeroJson.image.base'
  | 'image.childrenHeroJson.image.ext'
  | 'image.childrenHeroJson.image.name'
  | 'image.childrenHeroJson.image.relativeDirectory'
  | 'image.childrenHeroJson.image.dev'
  | 'image.childrenHeroJson.image.mode'
  | 'image.childrenHeroJson.image.nlink'
  | 'image.childrenHeroJson.image.uid'
  | 'image.childrenHeroJson.image.gid'
  | 'image.childrenHeroJson.image.rdev'
  | 'image.childrenHeroJson.image.ino'
  | 'image.childrenHeroJson.image.atimeMs'
  | 'image.childrenHeroJson.image.mtimeMs'
  | 'image.childrenHeroJson.image.ctimeMs'
  | 'image.childrenHeroJson.image.atime'
  | 'image.childrenHeroJson.image.mtime'
  | 'image.childrenHeroJson.image.ctime'
  | 'image.childrenHeroJson.image.birthtime'
  | 'image.childrenHeroJson.image.birthtimeMs'
  | 'image.childrenHeroJson.image.blksize'
  | 'image.childrenHeroJson.image.blocks'
  | 'image.childrenHeroJson.image.publicURL'
  | 'image.childrenHeroJson.image.childrenImageSharp'
  | 'image.childrenHeroJson.image.childrenMarkdownRemark'
  | 'image.childrenHeroJson.image.childrenHeroJson'
  | 'image.childrenHeroJson.image.childrenFeaturesJson'
  | 'image.childrenHeroJson.image.childrenAboutJson'
  | 'image.childrenHeroJson.image.childrenContentJson'
  | 'image.childrenHeroJson.image.id'
  | 'image.childrenHeroJson.image.children'
  | 'image.childHeroJson.id'
  | 'image.childHeroJson.parent.id'
  | 'image.childHeroJson.parent.children'
  | 'image.childHeroJson.children'
  | 'image.childHeroJson.children.id'
  | 'image.childHeroJson.children.children'
  | 'image.childHeroJson.internal.content'
  | 'image.childHeroJson.internal.contentDigest'
  | 'image.childHeroJson.internal.description'
  | 'image.childHeroJson.internal.fieldOwners'
  | 'image.childHeroJson.internal.ignoreType'
  | 'image.childHeroJson.internal.mediaType'
  | 'image.childHeroJson.internal.owner'
  | 'image.childHeroJson.internal.type'
  | 'image.childHeroJson.title'
  | 'image.childHeroJson.body'
  | 'image.childHeroJson.image.sourceInstanceName'
  | 'image.childHeroJson.image.absolutePath'
  | 'image.childHeroJson.image.relativePath'
  | 'image.childHeroJson.image.extension'
  | 'image.childHeroJson.image.size'
  | 'image.childHeroJson.image.prettySize'
  | 'image.childHeroJson.image.modifiedTime'
  | 'image.childHeroJson.image.accessTime'
  | 'image.childHeroJson.image.changeTime'
  | 'image.childHeroJson.image.birthTime'
  | 'image.childHeroJson.image.root'
  | 'image.childHeroJson.image.dir'
  | 'image.childHeroJson.image.base'
  | 'image.childHeroJson.image.ext'
  | 'image.childHeroJson.image.name'
  | 'image.childHeroJson.image.relativeDirectory'
  | 'image.childHeroJson.image.dev'
  | 'image.childHeroJson.image.mode'
  | 'image.childHeroJson.image.nlink'
  | 'image.childHeroJson.image.uid'
  | 'image.childHeroJson.image.gid'
  | 'image.childHeroJson.image.rdev'
  | 'image.childHeroJson.image.ino'
  | 'image.childHeroJson.image.atimeMs'
  | 'image.childHeroJson.image.mtimeMs'
  | 'image.childHeroJson.image.ctimeMs'
  | 'image.childHeroJson.image.atime'
  | 'image.childHeroJson.image.mtime'
  | 'image.childHeroJson.image.ctime'
  | 'image.childHeroJson.image.birthtime'
  | 'image.childHeroJson.image.birthtimeMs'
  | 'image.childHeroJson.image.blksize'
  | 'image.childHeroJson.image.blocks'
  | 'image.childHeroJson.image.publicURL'
  | 'image.childHeroJson.image.childrenImageSharp'
  | 'image.childHeroJson.image.childrenMarkdownRemark'
  | 'image.childHeroJson.image.childrenHeroJson'
  | 'image.childHeroJson.image.childrenFeaturesJson'
  | 'image.childHeroJson.image.childrenAboutJson'
  | 'image.childHeroJson.image.childrenContentJson'
  | 'image.childHeroJson.image.id'
  | 'image.childHeroJson.image.children'
  | 'image.childrenFeaturesJson'
  | 'image.childrenFeaturesJson.id'
  | 'image.childrenFeaturesJson.parent.id'
  | 'image.childrenFeaturesJson.parent.children'
  | 'image.childrenFeaturesJson.children'
  | 'image.childrenFeaturesJson.children.id'
  | 'image.childrenFeaturesJson.children.children'
  | 'image.childrenFeaturesJson.internal.content'
  | 'image.childrenFeaturesJson.internal.contentDigest'
  | 'image.childrenFeaturesJson.internal.description'
  | 'image.childrenFeaturesJson.internal.fieldOwners'
  | 'image.childrenFeaturesJson.internal.ignoreType'
  | 'image.childrenFeaturesJson.internal.mediaType'
  | 'image.childrenFeaturesJson.internal.owner'
  | 'image.childrenFeaturesJson.internal.type'
  | 'image.childrenFeaturesJson.features'
  | 'image.childrenFeaturesJson.features.text'
  | 'image.childFeaturesJson.id'
  | 'image.childFeaturesJson.parent.id'
  | 'image.childFeaturesJson.parent.children'
  | 'image.childFeaturesJson.children'
  | 'image.childFeaturesJson.children.id'
  | 'image.childFeaturesJson.children.children'
  | 'image.childFeaturesJson.internal.content'
  | 'image.childFeaturesJson.internal.contentDigest'
  | 'image.childFeaturesJson.internal.description'
  | 'image.childFeaturesJson.internal.fieldOwners'
  | 'image.childFeaturesJson.internal.ignoreType'
  | 'image.childFeaturesJson.internal.mediaType'
  | 'image.childFeaturesJson.internal.owner'
  | 'image.childFeaturesJson.internal.type'
  | 'image.childFeaturesJson.features'
  | 'image.childFeaturesJson.features.text'
  | 'image.childrenAboutJson'
  | 'image.childrenAboutJson.id'
  | 'image.childrenAboutJson.parent.id'
  | 'image.childrenAboutJson.parent.children'
  | 'image.childrenAboutJson.children'
  | 'image.childrenAboutJson.children.id'
  | 'image.childrenAboutJson.children.children'
  | 'image.childrenAboutJson.internal.content'
  | 'image.childrenAboutJson.internal.contentDigest'
  | 'image.childrenAboutJson.internal.description'
  | 'image.childrenAboutJson.internal.fieldOwners'
  | 'image.childrenAboutJson.internal.ignoreType'
  | 'image.childrenAboutJson.internal.mediaType'
  | 'image.childrenAboutJson.internal.owner'
  | 'image.childrenAboutJson.internal.type'
  | 'image.childrenAboutJson.body'
  | 'image.childrenAboutJson.title'
  | 'image.childrenAboutJson.image.sourceInstanceName'
  | 'image.childrenAboutJson.image.absolutePath'
  | 'image.childrenAboutJson.image.relativePath'
  | 'image.childrenAboutJson.image.extension'
  | 'image.childrenAboutJson.image.size'
  | 'image.childrenAboutJson.image.prettySize'
  | 'image.childrenAboutJson.image.modifiedTime'
  | 'image.childrenAboutJson.image.accessTime'
  | 'image.childrenAboutJson.image.changeTime'
  | 'image.childrenAboutJson.image.birthTime'
  | 'image.childrenAboutJson.image.root'
  | 'image.childrenAboutJson.image.dir'
  | 'image.childrenAboutJson.image.base'
  | 'image.childrenAboutJson.image.ext'
  | 'image.childrenAboutJson.image.name'
  | 'image.childrenAboutJson.image.relativeDirectory'
  | 'image.childrenAboutJson.image.dev'
  | 'image.childrenAboutJson.image.mode'
  | 'image.childrenAboutJson.image.nlink'
  | 'image.childrenAboutJson.image.uid'
  | 'image.childrenAboutJson.image.gid'
  | 'image.childrenAboutJson.image.rdev'
  | 'image.childrenAboutJson.image.ino'
  | 'image.childrenAboutJson.image.atimeMs'
  | 'image.childrenAboutJson.image.mtimeMs'
  | 'image.childrenAboutJson.image.ctimeMs'
  | 'image.childrenAboutJson.image.atime'
  | 'image.childrenAboutJson.image.mtime'
  | 'image.childrenAboutJson.image.ctime'
  | 'image.childrenAboutJson.image.birthtime'
  | 'image.childrenAboutJson.image.birthtimeMs'
  | 'image.childrenAboutJson.image.blksize'
  | 'image.childrenAboutJson.image.blocks'
  | 'image.childrenAboutJson.image.publicURL'
  | 'image.childrenAboutJson.image.childrenImageSharp'
  | 'image.childrenAboutJson.image.childrenMarkdownRemark'
  | 'image.childrenAboutJson.image.childrenHeroJson'
  | 'image.childrenAboutJson.image.childrenFeaturesJson'
  | 'image.childrenAboutJson.image.childrenAboutJson'
  | 'image.childrenAboutJson.image.childrenContentJson'
  | 'image.childrenAboutJson.image.id'
  | 'image.childrenAboutJson.image.children'
  | 'image.childrenAboutJson.chooseUs'
  | 'image.childrenAboutJson.chooseUs.text'
  | 'image.childrenAboutJson.chooseUs.title'
  | 'image.childAboutJson.id'
  | 'image.childAboutJson.parent.id'
  | 'image.childAboutJson.parent.children'
  | 'image.childAboutJson.children'
  | 'image.childAboutJson.children.id'
  | 'image.childAboutJson.children.children'
  | 'image.childAboutJson.internal.content'
  | 'image.childAboutJson.internal.contentDigest'
  | 'image.childAboutJson.internal.description'
  | 'image.childAboutJson.internal.fieldOwners'
  | 'image.childAboutJson.internal.ignoreType'
  | 'image.childAboutJson.internal.mediaType'
  | 'image.childAboutJson.internal.owner'
  | 'image.childAboutJson.internal.type'
  | 'image.childAboutJson.body'
  | 'image.childAboutJson.title'
  | 'image.childAboutJson.image.sourceInstanceName'
  | 'image.childAboutJson.image.absolutePath'
  | 'image.childAboutJson.image.relativePath'
  | 'image.childAboutJson.image.extension'
  | 'image.childAboutJson.image.size'
  | 'image.childAboutJson.image.prettySize'
  | 'image.childAboutJson.image.modifiedTime'
  | 'image.childAboutJson.image.accessTime'
  | 'image.childAboutJson.image.changeTime'
  | 'image.childAboutJson.image.birthTime'
  | 'image.childAboutJson.image.root'
  | 'image.childAboutJson.image.dir'
  | 'image.childAboutJson.image.base'
  | 'image.childAboutJson.image.ext'
  | 'image.childAboutJson.image.name'
  | 'image.childAboutJson.image.relativeDirectory'
  | 'image.childAboutJson.image.dev'
  | 'image.childAboutJson.image.mode'
  | 'image.childAboutJson.image.nlink'
  | 'image.childAboutJson.image.uid'
  | 'image.childAboutJson.image.gid'
  | 'image.childAboutJson.image.rdev'
  | 'image.childAboutJson.image.ino'
  | 'image.childAboutJson.image.atimeMs'
  | 'image.childAboutJson.image.mtimeMs'
  | 'image.childAboutJson.image.ctimeMs'
  | 'image.childAboutJson.image.atime'
  | 'image.childAboutJson.image.mtime'
  | 'image.childAboutJson.image.ctime'
  | 'image.childAboutJson.image.birthtime'
  | 'image.childAboutJson.image.birthtimeMs'
  | 'image.childAboutJson.image.blksize'
  | 'image.childAboutJson.image.blocks'
  | 'image.childAboutJson.image.publicURL'
  | 'image.childAboutJson.image.childrenImageSharp'
  | 'image.childAboutJson.image.childrenMarkdownRemark'
  | 'image.childAboutJson.image.childrenHeroJson'
  | 'image.childAboutJson.image.childrenFeaturesJson'
  | 'image.childAboutJson.image.childrenAboutJson'
  | 'image.childAboutJson.image.childrenContentJson'
  | 'image.childAboutJson.image.id'
  | 'image.childAboutJson.image.children'
  | 'image.childAboutJson.chooseUs'
  | 'image.childAboutJson.chooseUs.text'
  | 'image.childAboutJson.chooseUs.title'
  | 'image.childrenContentJson'
  | 'image.childrenContentJson.id'
  | 'image.childrenContentJson.parent.id'
  | 'image.childrenContentJson.parent.children'
  | 'image.childrenContentJson.children'
  | 'image.childrenContentJson.children.id'
  | 'image.childrenContentJson.children.children'
  | 'image.childrenContentJson.internal.content'
  | 'image.childrenContentJson.internal.contentDigest'
  | 'image.childrenContentJson.internal.description'
  | 'image.childrenContentJson.internal.fieldOwners'
  | 'image.childrenContentJson.internal.ignoreType'
  | 'image.childrenContentJson.internal.mediaType'
  | 'image.childrenContentJson.internal.owner'
  | 'image.childrenContentJson.internal.type'
  | 'image.childrenContentJson.men'
  | 'image.childrenContentJson.men.category'
  | 'image.childrenContentJson.women'
  | 'image.childrenContentJson.women.category'
  | 'image.childrenContentJson.boys'
  | 'image.childrenContentJson.boys.category'
  | 'image.childrenContentJson.girls'
  | 'image.childrenContentJson.girls.category'
  | 'image.childContentJson.id'
  | 'image.childContentJson.parent.id'
  | 'image.childContentJson.parent.children'
  | 'image.childContentJson.children'
  | 'image.childContentJson.children.id'
  | 'image.childContentJson.children.children'
  | 'image.childContentJson.internal.content'
  | 'image.childContentJson.internal.contentDigest'
  | 'image.childContentJson.internal.description'
  | 'image.childContentJson.internal.fieldOwners'
  | 'image.childContentJson.internal.ignoreType'
  | 'image.childContentJson.internal.mediaType'
  | 'image.childContentJson.internal.owner'
  | 'image.childContentJson.internal.type'
  | 'image.childContentJson.men'
  | 'image.childContentJson.men.category'
  | 'image.childContentJson.women'
  | 'image.childContentJson.women.category'
  | 'image.childContentJson.boys'
  | 'image.childContentJson.boys.category'
  | 'image.childContentJson.girls'
  | 'image.childContentJson.girls.category'
  | 'image.id'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'chooseUs'
  | 'chooseUs.image.sourceInstanceName'
  | 'chooseUs.image.absolutePath'
  | 'chooseUs.image.relativePath'
  | 'chooseUs.image.extension'
  | 'chooseUs.image.size'
  | 'chooseUs.image.prettySize'
  | 'chooseUs.image.modifiedTime'
  | 'chooseUs.image.accessTime'
  | 'chooseUs.image.changeTime'
  | 'chooseUs.image.birthTime'
  | 'chooseUs.image.root'
  | 'chooseUs.image.dir'
  | 'chooseUs.image.base'
  | 'chooseUs.image.ext'
  | 'chooseUs.image.name'
  | 'chooseUs.image.relativeDirectory'
  | 'chooseUs.image.dev'
  | 'chooseUs.image.mode'
  | 'chooseUs.image.nlink'
  | 'chooseUs.image.uid'
  | 'chooseUs.image.gid'
  | 'chooseUs.image.rdev'
  | 'chooseUs.image.ino'
  | 'chooseUs.image.atimeMs'
  | 'chooseUs.image.mtimeMs'
  | 'chooseUs.image.ctimeMs'
  | 'chooseUs.image.atime'
  | 'chooseUs.image.mtime'
  | 'chooseUs.image.ctime'
  | 'chooseUs.image.birthtime'
  | 'chooseUs.image.birthtimeMs'
  | 'chooseUs.image.blksize'
  | 'chooseUs.image.blocks'
  | 'chooseUs.image.publicURL'
  | 'chooseUs.image.childrenImageSharp'
  | 'chooseUs.image.childrenImageSharp.gatsbyImageData'
  | 'chooseUs.image.childrenImageSharp.id'
  | 'chooseUs.image.childrenImageSharp.children'
  | 'chooseUs.image.childImageSharp.gatsbyImageData'
  | 'chooseUs.image.childImageSharp.id'
  | 'chooseUs.image.childImageSharp.children'
  | 'chooseUs.image.childrenMarkdownRemark'
  | 'chooseUs.image.childrenMarkdownRemark.id'
  | 'chooseUs.image.childrenMarkdownRemark.excerpt'
  | 'chooseUs.image.childrenMarkdownRemark.rawMarkdownBody'
  | 'chooseUs.image.childrenMarkdownRemark.fileAbsolutePath'
  | 'chooseUs.image.childrenMarkdownRemark.html'
  | 'chooseUs.image.childrenMarkdownRemark.htmlAst'
  | 'chooseUs.image.childrenMarkdownRemark.excerptAst'
  | 'chooseUs.image.childrenMarkdownRemark.headings'
  | 'chooseUs.image.childrenMarkdownRemark.timeToRead'
  | 'chooseUs.image.childrenMarkdownRemark.tableOfContents'
  | 'chooseUs.image.childrenMarkdownRemark.children'
  | 'chooseUs.image.childMarkdownRemark.id'
  | 'chooseUs.image.childMarkdownRemark.excerpt'
  | 'chooseUs.image.childMarkdownRemark.rawMarkdownBody'
  | 'chooseUs.image.childMarkdownRemark.fileAbsolutePath'
  | 'chooseUs.image.childMarkdownRemark.html'
  | 'chooseUs.image.childMarkdownRemark.htmlAst'
  | 'chooseUs.image.childMarkdownRemark.excerptAst'
  | 'chooseUs.image.childMarkdownRemark.headings'
  | 'chooseUs.image.childMarkdownRemark.timeToRead'
  | 'chooseUs.image.childMarkdownRemark.tableOfContents'
  | 'chooseUs.image.childMarkdownRemark.children'
  | 'chooseUs.image.childrenHeroJson'
  | 'chooseUs.image.childrenHeroJson.id'
  | 'chooseUs.image.childrenHeroJson.children'
  | 'chooseUs.image.childrenHeroJson.title'
  | 'chooseUs.image.childrenHeroJson.body'
  | 'chooseUs.image.childHeroJson.id'
  | 'chooseUs.image.childHeroJson.children'
  | 'chooseUs.image.childHeroJson.title'
  | 'chooseUs.image.childHeroJson.body'
  | 'chooseUs.image.childrenFeaturesJson'
  | 'chooseUs.image.childrenFeaturesJson.id'
  | 'chooseUs.image.childrenFeaturesJson.children'
  | 'chooseUs.image.childrenFeaturesJson.features'
  | 'chooseUs.image.childFeaturesJson.id'
  | 'chooseUs.image.childFeaturesJson.children'
  | 'chooseUs.image.childFeaturesJson.features'
  | 'chooseUs.image.childrenAboutJson'
  | 'chooseUs.image.childrenAboutJson.id'
  | 'chooseUs.image.childrenAboutJson.children'
  | 'chooseUs.image.childrenAboutJson.body'
  | 'chooseUs.image.childrenAboutJson.title'
  | 'chooseUs.image.childrenAboutJson.chooseUs'
  | 'chooseUs.image.childAboutJson.id'
  | 'chooseUs.image.childAboutJson.children'
  | 'chooseUs.image.childAboutJson.body'
  | 'chooseUs.image.childAboutJson.title'
  | 'chooseUs.image.childAboutJson.chooseUs'
  | 'chooseUs.image.childrenContentJson'
  | 'chooseUs.image.childrenContentJson.id'
  | 'chooseUs.image.childrenContentJson.children'
  | 'chooseUs.image.childrenContentJson.men'
  | 'chooseUs.image.childrenContentJson.women'
  | 'chooseUs.image.childrenContentJson.boys'
  | 'chooseUs.image.childrenContentJson.girls'
  | 'chooseUs.image.childContentJson.id'
  | 'chooseUs.image.childContentJson.children'
  | 'chooseUs.image.childContentJson.men'
  | 'chooseUs.image.childContentJson.women'
  | 'chooseUs.image.childContentJson.boys'
  | 'chooseUs.image.childContentJson.girls'
  | 'chooseUs.image.id'
  | 'chooseUs.image.parent.id'
  | 'chooseUs.image.parent.children'
  | 'chooseUs.image.children'
  | 'chooseUs.image.children.id'
  | 'chooseUs.image.children.children'
  | 'chooseUs.image.internal.content'
  | 'chooseUs.image.internal.contentDigest'
  | 'chooseUs.image.internal.description'
  | 'chooseUs.image.internal.fieldOwners'
  | 'chooseUs.image.internal.ignoreType'
  | 'chooseUs.image.internal.mediaType'
  | 'chooseUs.image.internal.owner'
  | 'chooseUs.image.internal.type'
  | 'chooseUs.text'
  | 'chooseUs.title';

type AboutJsonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AboutJsonEdge>;
  readonly nodes: ReadonlyArray<AboutJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type AboutJsonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<AboutJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentJsonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentJsonEdge>;
  readonly nodes: ReadonlyArray<ContentJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentJsonGroupConnection>;
};


type ContentJsonConnection_distinctArgs = {
  field: ContentJsonFieldsEnum;
};


type ContentJsonConnection_maxArgs = {
  field: ContentJsonFieldsEnum;
};


type ContentJsonConnection_minArgs = {
  field: ContentJsonFieldsEnum;
};


type ContentJsonConnection_sumArgs = {
  field: ContentJsonFieldsEnum;
};


type ContentJsonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentJsonFieldsEnum;
};

type ContentJsonEdge = {
  readonly next: Maybe<ContentJson>;
  readonly node: ContentJson;
  readonly previous: Maybe<ContentJson>;
};

type ContentJsonFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'men'
  | 'men.category'
  | 'women'
  | 'women.category'
  | 'boys'
  | 'boys.category'
  | 'girls'
  | 'girls.category';

type ContentJsonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentJsonEdge>;
  readonly nodes: ReadonlyArray<ContentJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentJsonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ProductCatalogCatalogFilterInput = {
  readonly boys: Maybe<StringQueryOperatorInput>;
  readonly girls: Maybe<StringQueryOperatorInput>;
  readonly women: Maybe<StringQueryOperatorInput>;
  readonly men: Maybe<StringQueryOperatorInput>;
};

type ProductCatalogConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ProductCatalogEdge>;
  readonly nodes: ReadonlyArray<ProductCatalog>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ProductCatalogGroupConnection>;
};


type ProductCatalogConnection_distinctArgs = {
  field: ProductCatalogFieldsEnum;
};


type ProductCatalogConnection_maxArgs = {
  field: ProductCatalogFieldsEnum;
};


type ProductCatalogConnection_minArgs = {
  field: ProductCatalogFieldsEnum;
};


type ProductCatalogConnection_sumArgs = {
  field: ProductCatalogFieldsEnum;
};


type ProductCatalogConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ProductCatalogFieldsEnum;
};

type ProductCatalogEdge = {
  readonly next: Maybe<ProductCatalog>;
  readonly node: ProductCatalog;
  readonly previous: Maybe<ProductCatalog>;
};

type ProductCatalogFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'catalog.boys'
  | 'catalog.girls'
  | 'catalog.women'
  | 'catalog.men';

type ProductCatalogGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ProductCatalogEdge>;
  readonly nodes: ReadonlyArray<ProductCatalog>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ProductCatalogFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly catalog: Maybe<ProductCatalogCatalogFilterInput>;
};

type ProductCatalogSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ProductCatalogFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.plugins'
  | 'pluginOptions.plugins.resolve'
  | 'pluginOptions.plugins.id'
  | 'pluginOptions.plugins.name'
  | 'pluginOptions.plugins.version'
  | 'pluginOptions.plugins.pluginOptions.maxWidth'
  | 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.plugins.pluginOptions.showCaptions'
  | 'pluginOptions.plugins.pluginOptions.markdownCaptions'
  | 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.plugins.pluginOptions.backgroundColor'
  | 'pluginOptions.plugins.pluginOptions.quality'
  | 'pluginOptions.plugins.pluginOptions.withWebp'
  | 'pluginOptions.plugins.pluginOptions.tracedSVG'
  | 'pluginOptions.plugins.pluginOptions.loading'
  | 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.plugins.pluginOptions.disableBgImage'
  | 'pluginOptions.plugins.nodeAPIs'
  | 'pluginOptions.plugins.browserAPIs'
  | 'pluginOptions.plugins.pluginFilepath'
  | 'pluginOptions.enableIdentityWidget'
  | 'pluginOptions.manualInit'
  | 'pluginOptions.modulePath'
  | 'pluginOptions.publicPath'
  | 'pluginOptions.name'
  | 'pluginOptions.engine'
  | 'pluginOptions.query'
  | 'pluginOptions.ref'
  | 'pluginOptions.index'
  | 'pluginOptions.store'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.commonmark'
  | 'pluginOptions.footnotes'
  | 'pluginOptions.pedantic'
  | 'pluginOptions.gfm'
  | 'pluginOptions.maxWidth'
  | 'pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.showCaptions'
  | 'pluginOptions.markdownCaptions'
  | 'pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.backgroundColor'
  | 'pluginOptions.quality'
  | 'pluginOptions.withWebp'
  | 'pluginOptions.tracedSVG'
  | 'pluginOptions.loading'
  | 'pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.disableBgImage'
  | 'pluginOptions.cssLoaderOptions.esModule'
  | 'pluginOptions.cssLoaderOptions.modules.namedExport'
  | 'pluginOptions.path'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.aliases._'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FeaturesQueryVariables = Exact<{ [key: string]: never; }>;


type FeaturesQuery = { readonly featuresJson: Maybe<{ readonly features: Maybe<ReadonlyArray<Maybe<(
      Pick<FeaturesJsonFeatures, 'text'>
      & { readonly image: Maybe<{ readonly a: Maybe<{ b: ImageSharp['gatsbyImageData'] }> }> }
    )>>> }> };

type HeroQueryVariables = Exact<{ [key: string]: never; }>;


type HeroQuery = { readonly json: Maybe<(
    Pick<HeroJson, 'title' | 'body'>
    & { readonly image: Maybe<{ readonly a: Maybe<{ b: ImageSharp['gatsbyImageData'] }> }> }
  )> };

type CatalogQueryVariables = Exact<{ [key: string]: never; }>;


type CatalogQuery = { readonly productCatalog: Maybe<{ readonly catalog: Maybe<Pick<ProductCatalogCatalog, 'boys' | 'girls' | 'men' | 'women'>> }> };

type SeoQueryVariables = Exact<{ [key: string]: never; }>;


type SeoQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


type AboutPageQuery = { readonly aboutJson: Maybe<(
    Pick<AboutJson, 'body' | 'title'>
    & { readonly image: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly chooseUs: Maybe<ReadonlyArray<Maybe<(
      Pick<AboutJsonChooseUs, 'title' | 'text'>
      & { readonly image: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>>> }
  )> };

type ProductFrontmatterFragmentFragment = Pick<MarkdownRemarkFrontmatter, 'title' | 'category' | 'hidden' | 'careatedAt' | 'discount' | 'type' | 'price'>;

type ProductCardImageFragmentFragment = { readonly a: Maybe<{ b: ImageSharp['gatsbyImageData'] }> };

type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type IndexPageQuery = { readonly newProducts: { readonly nodes: ReadonlyArray<(
      Pick<MarkdownRemark, 'id'>
      & { readonly frontmatter: Maybe<(
        { readonly imagePreview: Maybe<ProductCardImageFragmentFragment> }
        & ProductFrontmatterFragmentFragment
      )> }
    )> }, readonly promoProducts: { readonly nodes: ReadonlyArray<(
      Pick<MarkdownRemark, 'id'>
      & { readonly frontmatter: Maybe<(
        { readonly imagePreview: Maybe<ProductCardImageFragmentFragment> }
        & ProductFrontmatterFragmentFragment
      )> }
    )> } };

type CategoryPageQueryVariables = Exact<{
  type: Scalars['String'];
  category: Maybe<Scalars['String']>;
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


type CategoryPageQuery = { readonly amr: { readonly nodes: ReadonlyArray<(
      Pick<MarkdownRemark, 'id'>
      & { readonly frontmatter: Maybe<(
        { readonly imagePreview: Maybe<ProductCardImageFragmentFragment> }
        & ProductFrontmatterFragmentFragment
      )> }
    )> } };

type ProductImagesFragmentFragment = { readonly images: Maybe<ReadonlyArray<Maybe<{ readonly image: Maybe<{ readonly a: Maybe<{ b: ImageSharp['gatsbyImageData'] }> }> }>>>, readonly imagesPreview: Maybe<ReadonlyArray<Maybe<{ readonly image: Maybe<{ readonly a: Maybe<{ b: ImageSharp['gatsbyImageData'] }> }> }>>> };

type ProductPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type ProductPageQuery = { readonly amr: Maybe<(
    Pick<MarkdownRemark, 'id' | 'rawMarkdownBody'>
    & { readonly frontmatter: Maybe<(
      ProductFrontmatterFragmentFragment
      & ProductImagesFragmentFragment
    )> }
  )> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'apiRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}