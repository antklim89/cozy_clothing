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
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly categories: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly category: Maybe<Scalars['String']>;
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
  readonly image: Maybe<File>;
  readonly slug: Maybe<Scalars['String']>;
  readonly chooseUs: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterChooseUs>>>;
  readonly layout: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly hidden: Maybe<Scalars['Boolean']>;
  readonly promo: Maybe<Scalars['Boolean']>;
  readonly careatedAt: Maybe<Scalars['Date']>;
  readonly images: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterImages>>>;
  readonly price: Maybe<Scalars['Int']>;
  readonly category: Maybe<Scalars['String']>;
  readonly brand: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatter_careatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterChooseUs = {
  readonly image: Maybe<File>;
  readonly text: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
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
  readonly men: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly women: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
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
  readonly name: Maybe<Scalars['String']>;
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
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly heroJson: Maybe<HeroJson>;
  readonly allHeroJson: HeroJsonConnection;
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
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
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
  readonly image: Maybe<FileFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly chooseUs: Maybe<MarkdownRemarkFrontmatterChooseUsFilterListInput>;
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly hidden: Maybe<BooleanQueryOperatorInput>;
  readonly promo: Maybe<BooleanQueryOperatorInput>;
  readonly careatedAt: Maybe<DateQueryOperatorInput>;
  readonly images: Maybe<MarkdownRemarkFrontmatterImagesFilterListInput>;
  readonly price: Maybe<IntQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly brand: Maybe<StringQueryOperatorInput>;
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

type MarkdownRemarkFrontmatterChooseUsFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterChooseUsFilterInput>;
};

type MarkdownRemarkFrontmatterChooseUsFilterInput = {
  readonly image: Maybe<FileFilterInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
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
  | 'childrenMarkdownRemark.frontmatter.image.sourceInstanceName'
  | 'childrenMarkdownRemark.frontmatter.image.absolutePath'
  | 'childrenMarkdownRemark.frontmatter.image.relativePath'
  | 'childrenMarkdownRemark.frontmatter.image.extension'
  | 'childrenMarkdownRemark.frontmatter.image.size'
  | 'childrenMarkdownRemark.frontmatter.image.prettySize'
  | 'childrenMarkdownRemark.frontmatter.image.modifiedTime'
  | 'childrenMarkdownRemark.frontmatter.image.accessTime'
  | 'childrenMarkdownRemark.frontmatter.image.changeTime'
  | 'childrenMarkdownRemark.frontmatter.image.birthTime'
  | 'childrenMarkdownRemark.frontmatter.image.root'
  | 'childrenMarkdownRemark.frontmatter.image.dir'
  | 'childrenMarkdownRemark.frontmatter.image.base'
  | 'childrenMarkdownRemark.frontmatter.image.ext'
  | 'childrenMarkdownRemark.frontmatter.image.name'
  | 'childrenMarkdownRemark.frontmatter.image.relativeDirectory'
  | 'childrenMarkdownRemark.frontmatter.image.dev'
  | 'childrenMarkdownRemark.frontmatter.image.mode'
  | 'childrenMarkdownRemark.frontmatter.image.nlink'
  | 'childrenMarkdownRemark.frontmatter.image.uid'
  | 'childrenMarkdownRemark.frontmatter.image.gid'
  | 'childrenMarkdownRemark.frontmatter.image.rdev'
  | 'childrenMarkdownRemark.frontmatter.image.ino'
  | 'childrenMarkdownRemark.frontmatter.image.atimeMs'
  | 'childrenMarkdownRemark.frontmatter.image.mtimeMs'
  | 'childrenMarkdownRemark.frontmatter.image.ctimeMs'
  | 'childrenMarkdownRemark.frontmatter.image.atime'
  | 'childrenMarkdownRemark.frontmatter.image.mtime'
  | 'childrenMarkdownRemark.frontmatter.image.ctime'
  | 'childrenMarkdownRemark.frontmatter.image.birthtime'
  | 'childrenMarkdownRemark.frontmatter.image.birthtimeMs'
  | 'childrenMarkdownRemark.frontmatter.image.blksize'
  | 'childrenMarkdownRemark.frontmatter.image.blocks'
  | 'childrenMarkdownRemark.frontmatter.image.publicURL'
  | 'childrenMarkdownRemark.frontmatter.image.childrenImageSharp'
  | 'childrenMarkdownRemark.frontmatter.image.childrenMarkdownRemark'
  | 'childrenMarkdownRemark.frontmatter.image.childrenHeroJson'
  | 'childrenMarkdownRemark.frontmatter.image.childrenContentJson'
  | 'childrenMarkdownRemark.frontmatter.image.id'
  | 'childrenMarkdownRemark.frontmatter.image.children'
  | 'childrenMarkdownRemark.frontmatter.slug'
  | 'childrenMarkdownRemark.frontmatter.chooseUs'
  | 'childrenMarkdownRemark.frontmatter.chooseUs.text'
  | 'childrenMarkdownRemark.frontmatter.chooseUs.title'
  | 'childrenMarkdownRemark.frontmatter.layout'
  | 'childrenMarkdownRemark.frontmatter.type'
  | 'childrenMarkdownRemark.frontmatter.hidden'
  | 'childrenMarkdownRemark.frontmatter.promo'
  | 'childrenMarkdownRemark.frontmatter.careatedAt'
  | 'childrenMarkdownRemark.frontmatter.images'
  | 'childrenMarkdownRemark.frontmatter.price'
  | 'childrenMarkdownRemark.frontmatter.category'
  | 'childrenMarkdownRemark.frontmatter.brand'
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
  | 'childMarkdownRemark.frontmatter.image.sourceInstanceName'
  | 'childMarkdownRemark.frontmatter.image.absolutePath'
  | 'childMarkdownRemark.frontmatter.image.relativePath'
  | 'childMarkdownRemark.frontmatter.image.extension'
  | 'childMarkdownRemark.frontmatter.image.size'
  | 'childMarkdownRemark.frontmatter.image.prettySize'
  | 'childMarkdownRemark.frontmatter.image.modifiedTime'
  | 'childMarkdownRemark.frontmatter.image.accessTime'
  | 'childMarkdownRemark.frontmatter.image.changeTime'
  | 'childMarkdownRemark.frontmatter.image.birthTime'
  | 'childMarkdownRemark.frontmatter.image.root'
  | 'childMarkdownRemark.frontmatter.image.dir'
  | 'childMarkdownRemark.frontmatter.image.base'
  | 'childMarkdownRemark.frontmatter.image.ext'
  | 'childMarkdownRemark.frontmatter.image.name'
  | 'childMarkdownRemark.frontmatter.image.relativeDirectory'
  | 'childMarkdownRemark.frontmatter.image.dev'
  | 'childMarkdownRemark.frontmatter.image.mode'
  | 'childMarkdownRemark.frontmatter.image.nlink'
  | 'childMarkdownRemark.frontmatter.image.uid'
  | 'childMarkdownRemark.frontmatter.image.gid'
  | 'childMarkdownRemark.frontmatter.image.rdev'
  | 'childMarkdownRemark.frontmatter.image.ino'
  | 'childMarkdownRemark.frontmatter.image.atimeMs'
  | 'childMarkdownRemark.frontmatter.image.mtimeMs'
  | 'childMarkdownRemark.frontmatter.image.ctimeMs'
  | 'childMarkdownRemark.frontmatter.image.atime'
  | 'childMarkdownRemark.frontmatter.image.mtime'
  | 'childMarkdownRemark.frontmatter.image.ctime'
  | 'childMarkdownRemark.frontmatter.image.birthtime'
  | 'childMarkdownRemark.frontmatter.image.birthtimeMs'
  | 'childMarkdownRemark.frontmatter.image.blksize'
  | 'childMarkdownRemark.frontmatter.image.blocks'
  | 'childMarkdownRemark.frontmatter.image.publicURL'
  | 'childMarkdownRemark.frontmatter.image.childrenImageSharp'
  | 'childMarkdownRemark.frontmatter.image.childrenMarkdownRemark'
  | 'childMarkdownRemark.frontmatter.image.childrenHeroJson'
  | 'childMarkdownRemark.frontmatter.image.childrenContentJson'
  | 'childMarkdownRemark.frontmatter.image.id'
  | 'childMarkdownRemark.frontmatter.image.children'
  | 'childMarkdownRemark.frontmatter.slug'
  | 'childMarkdownRemark.frontmatter.chooseUs'
  | 'childMarkdownRemark.frontmatter.chooseUs.text'
  | 'childMarkdownRemark.frontmatter.chooseUs.title'
  | 'childMarkdownRemark.frontmatter.layout'
  | 'childMarkdownRemark.frontmatter.type'
  | 'childMarkdownRemark.frontmatter.hidden'
  | 'childMarkdownRemark.frontmatter.promo'
  | 'childMarkdownRemark.frontmatter.careatedAt'
  | 'childMarkdownRemark.frontmatter.images'
  | 'childMarkdownRemark.frontmatter.price'
  | 'childMarkdownRemark.frontmatter.category'
  | 'childMarkdownRemark.frontmatter.brand'
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
  readonly name: Maybe<StringQueryOperatorInput>;
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
  | 'pluginCreator.pluginOptions.name'
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
  | 'pluginCreatorId'
  | 'componentPath';

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
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
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
  | 'frontmatter.image.sourceInstanceName'
  | 'frontmatter.image.absolutePath'
  | 'frontmatter.image.relativePath'
  | 'frontmatter.image.extension'
  | 'frontmatter.image.size'
  | 'frontmatter.image.prettySize'
  | 'frontmatter.image.modifiedTime'
  | 'frontmatter.image.accessTime'
  | 'frontmatter.image.changeTime'
  | 'frontmatter.image.birthTime'
  | 'frontmatter.image.root'
  | 'frontmatter.image.dir'
  | 'frontmatter.image.base'
  | 'frontmatter.image.ext'
  | 'frontmatter.image.name'
  | 'frontmatter.image.relativeDirectory'
  | 'frontmatter.image.dev'
  | 'frontmatter.image.mode'
  | 'frontmatter.image.nlink'
  | 'frontmatter.image.uid'
  | 'frontmatter.image.gid'
  | 'frontmatter.image.rdev'
  | 'frontmatter.image.ino'
  | 'frontmatter.image.atimeMs'
  | 'frontmatter.image.mtimeMs'
  | 'frontmatter.image.ctimeMs'
  | 'frontmatter.image.atime'
  | 'frontmatter.image.mtime'
  | 'frontmatter.image.ctime'
  | 'frontmatter.image.birthtime'
  | 'frontmatter.image.birthtimeMs'
  | 'frontmatter.image.blksize'
  | 'frontmatter.image.blocks'
  | 'frontmatter.image.publicURL'
  | 'frontmatter.image.childrenImageSharp'
  | 'frontmatter.image.childrenImageSharp.gatsbyImageData'
  | 'frontmatter.image.childrenImageSharp.id'
  | 'frontmatter.image.childrenImageSharp.children'
  | 'frontmatter.image.childImageSharp.gatsbyImageData'
  | 'frontmatter.image.childImageSharp.id'
  | 'frontmatter.image.childImageSharp.children'
  | 'frontmatter.image.childrenMarkdownRemark'
  | 'frontmatter.image.childrenMarkdownRemark.id'
  | 'frontmatter.image.childrenMarkdownRemark.excerpt'
  | 'frontmatter.image.childrenMarkdownRemark.rawMarkdownBody'
  | 'frontmatter.image.childrenMarkdownRemark.fileAbsolutePath'
  | 'frontmatter.image.childrenMarkdownRemark.html'
  | 'frontmatter.image.childrenMarkdownRemark.htmlAst'
  | 'frontmatter.image.childrenMarkdownRemark.excerptAst'
  | 'frontmatter.image.childrenMarkdownRemark.headings'
  | 'frontmatter.image.childrenMarkdownRemark.timeToRead'
  | 'frontmatter.image.childrenMarkdownRemark.tableOfContents'
  | 'frontmatter.image.childrenMarkdownRemark.children'
  | 'frontmatter.image.childMarkdownRemark.id'
  | 'frontmatter.image.childMarkdownRemark.excerpt'
  | 'frontmatter.image.childMarkdownRemark.rawMarkdownBody'
  | 'frontmatter.image.childMarkdownRemark.fileAbsolutePath'
  | 'frontmatter.image.childMarkdownRemark.html'
  | 'frontmatter.image.childMarkdownRemark.htmlAst'
  | 'frontmatter.image.childMarkdownRemark.excerptAst'
  | 'frontmatter.image.childMarkdownRemark.headings'
  | 'frontmatter.image.childMarkdownRemark.timeToRead'
  | 'frontmatter.image.childMarkdownRemark.tableOfContents'
  | 'frontmatter.image.childMarkdownRemark.children'
  | 'frontmatter.image.childrenHeroJson'
  | 'frontmatter.image.childrenHeroJson.id'
  | 'frontmatter.image.childrenHeroJson.children'
  | 'frontmatter.image.childrenHeroJson.title'
  | 'frontmatter.image.childrenHeroJson.body'
  | 'frontmatter.image.childHeroJson.id'
  | 'frontmatter.image.childHeroJson.children'
  | 'frontmatter.image.childHeroJson.title'
  | 'frontmatter.image.childHeroJson.body'
  | 'frontmatter.image.childrenContentJson'
  | 'frontmatter.image.childrenContentJson.id'
  | 'frontmatter.image.childrenContentJson.children'
  | 'frontmatter.image.childrenContentJson.men'
  | 'frontmatter.image.childrenContentJson.women'
  | 'frontmatter.image.childrenContentJson.boys'
  | 'frontmatter.image.childrenContentJson.girls'
  | 'frontmatter.image.childContentJson.id'
  | 'frontmatter.image.childContentJson.children'
  | 'frontmatter.image.childContentJson.men'
  | 'frontmatter.image.childContentJson.women'
  | 'frontmatter.image.childContentJson.boys'
  | 'frontmatter.image.childContentJson.girls'
  | 'frontmatter.image.id'
  | 'frontmatter.image.parent.id'
  | 'frontmatter.image.parent.children'
  | 'frontmatter.image.children'
  | 'frontmatter.image.children.id'
  | 'frontmatter.image.children.children'
  | 'frontmatter.image.internal.content'
  | 'frontmatter.image.internal.contentDigest'
  | 'frontmatter.image.internal.description'
  | 'frontmatter.image.internal.fieldOwners'
  | 'frontmatter.image.internal.ignoreType'
  | 'frontmatter.image.internal.mediaType'
  | 'frontmatter.image.internal.owner'
  | 'frontmatter.image.internal.type'
  | 'frontmatter.slug'
  | 'frontmatter.chooseUs'
  | 'frontmatter.chooseUs.image.sourceInstanceName'
  | 'frontmatter.chooseUs.image.absolutePath'
  | 'frontmatter.chooseUs.image.relativePath'
  | 'frontmatter.chooseUs.image.extension'
  | 'frontmatter.chooseUs.image.size'
  | 'frontmatter.chooseUs.image.prettySize'
  | 'frontmatter.chooseUs.image.modifiedTime'
  | 'frontmatter.chooseUs.image.accessTime'
  | 'frontmatter.chooseUs.image.changeTime'
  | 'frontmatter.chooseUs.image.birthTime'
  | 'frontmatter.chooseUs.image.root'
  | 'frontmatter.chooseUs.image.dir'
  | 'frontmatter.chooseUs.image.base'
  | 'frontmatter.chooseUs.image.ext'
  | 'frontmatter.chooseUs.image.name'
  | 'frontmatter.chooseUs.image.relativeDirectory'
  | 'frontmatter.chooseUs.image.dev'
  | 'frontmatter.chooseUs.image.mode'
  | 'frontmatter.chooseUs.image.nlink'
  | 'frontmatter.chooseUs.image.uid'
  | 'frontmatter.chooseUs.image.gid'
  | 'frontmatter.chooseUs.image.rdev'
  | 'frontmatter.chooseUs.image.ino'
  | 'frontmatter.chooseUs.image.atimeMs'
  | 'frontmatter.chooseUs.image.mtimeMs'
  | 'frontmatter.chooseUs.image.ctimeMs'
  | 'frontmatter.chooseUs.image.atime'
  | 'frontmatter.chooseUs.image.mtime'
  | 'frontmatter.chooseUs.image.ctime'
  | 'frontmatter.chooseUs.image.birthtime'
  | 'frontmatter.chooseUs.image.birthtimeMs'
  | 'frontmatter.chooseUs.image.blksize'
  | 'frontmatter.chooseUs.image.blocks'
  | 'frontmatter.chooseUs.image.publicURL'
  | 'frontmatter.chooseUs.image.childrenImageSharp'
  | 'frontmatter.chooseUs.image.childrenMarkdownRemark'
  | 'frontmatter.chooseUs.image.childrenHeroJson'
  | 'frontmatter.chooseUs.image.childrenContentJson'
  | 'frontmatter.chooseUs.image.id'
  | 'frontmatter.chooseUs.image.children'
  | 'frontmatter.chooseUs.text'
  | 'frontmatter.chooseUs.title'
  | 'frontmatter.layout'
  | 'frontmatter.type'
  | 'frontmatter.hidden'
  | 'frontmatter.promo'
  | 'frontmatter.careatedAt'
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
  | 'frontmatter.images.image.childrenContentJson'
  | 'frontmatter.images.image.id'
  | 'frontmatter.images.image.children'
  | 'frontmatter.price'
  | 'frontmatter.category'
  | 'frontmatter.brand'
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
  | 'image.childrenMarkdownRemark.frontmatter.slug'
  | 'image.childrenMarkdownRemark.frontmatter.chooseUs'
  | 'image.childrenMarkdownRemark.frontmatter.layout'
  | 'image.childrenMarkdownRemark.frontmatter.type'
  | 'image.childrenMarkdownRemark.frontmatter.hidden'
  | 'image.childrenMarkdownRemark.frontmatter.promo'
  | 'image.childrenMarkdownRemark.frontmatter.careatedAt'
  | 'image.childrenMarkdownRemark.frontmatter.images'
  | 'image.childrenMarkdownRemark.frontmatter.price'
  | 'image.childrenMarkdownRemark.frontmatter.category'
  | 'image.childrenMarkdownRemark.frontmatter.brand'
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
  | 'image.childMarkdownRemark.frontmatter.slug'
  | 'image.childMarkdownRemark.frontmatter.chooseUs'
  | 'image.childMarkdownRemark.frontmatter.layout'
  | 'image.childMarkdownRemark.frontmatter.type'
  | 'image.childMarkdownRemark.frontmatter.hidden'
  | 'image.childMarkdownRemark.frontmatter.promo'
  | 'image.childMarkdownRemark.frontmatter.careatedAt'
  | 'image.childMarkdownRemark.frontmatter.images'
  | 'image.childMarkdownRemark.frontmatter.price'
  | 'image.childMarkdownRemark.frontmatter.category'
  | 'image.childMarkdownRemark.frontmatter.brand'
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
  | 'image.childHeroJson.image.childrenContentJson'
  | 'image.childHeroJson.image.id'
  | 'image.childHeroJson.image.children'
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
  readonly men: Maybe<StringQueryOperatorInput>;
  readonly women: Maybe<StringQueryOperatorInput>;
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
  | 'catalog.men'
  | 'catalog.women';

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
  | 'pluginOptions.name'
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


type AboutPageQuery = { readonly remark: Maybe<(
    Pick<MarkdownRemark, 'rawMarkdownBody'>
    & { readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { readonly image: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly chooseUs: Maybe<ReadonlyArray<Maybe<(
        Pick<MarkdownRemarkFrontmatterChooseUs, 'title' | 'text'>
        & { readonly image: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
      )>>> }
    )> }
  )> };

type ProductFrontmatterFragmentFragment = Pick<MarkdownRemarkFrontmatter, 'title' | 'category' | 'hidden' | 'careatedAt' | 'slug' | 'promo' | 'type' | 'price' | 'brand'>;

type ProductCardImageFragmentFragment = { readonly image: Maybe<{ readonly a: Maybe<{ b: ImageSharp['gatsbyImageData'] }> }> };

type CategoryPageQueryVariables = Exact<{
  type: Scalars['String'];
  category: Maybe<Scalars['String']>;
}>;


type CategoryPageQuery = { readonly amr: { readonly nodes: ReadonlyArray<(
      Pick<MarkdownRemark, 'id'>
      & { readonly frontmatter: Maybe<(
        { readonly images: Maybe<ReadonlyArray<Maybe<ProductCardImageFragmentFragment>>> }
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