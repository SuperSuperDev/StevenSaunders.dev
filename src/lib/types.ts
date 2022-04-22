export interface IEncodedVideo {
  encoding_id: number;
  title?: string;
  url: string;
  progress?: number;
  size?: string;
  status?: string;
  prevState?: null;
}

export interface IExtendedEncodedVideo extends IEncodedVideo {
  resolution?: string;
  encoder?: string;
  thumbnail: string;
  preview: string;
}

export type IEncodedVideoArray = IExtendedEncodedVideo[];

export interface IFilesDict {
  [key: string]: string;
}

export interface IVideoDetails {
  url: string;
  user: string;
  title: string;
  description: string;
  add_date: string;
  edit_date: string;
  media_type: string;
  state: string;
  duration: number;
  thumbnail_url: string;
  poster_url: string;
  thumbnail_time: number;
  sprites_url: string;
  preview_url: string;
  author_name: string;
  author_profile: string;
  author_thumbnail: string;
  encodings_info: IFilesDict;
  encoding_status: string;
  views: number;
  likes: number;
  dislikes: number;
  reported_times: number;
  user_featured: boolean;
  original_media_url: string;
  size: string;
  video_height: number;
  enable_comments: boolean;
  categories_info: string;
  is_reviewed: boolean;
  edit_url: string;
  tags_info: string;
  hls_info: Record<string, unknown>;
  license: number;
  subtitles_info: string;
  ratings_info: string;
  add_subtitle_url: string;
  allow_download: boolean;
}

export interface IEncodedH264Video {
  name: string;
  url: string;
}

export type IEncodedH264VideoArray = IEncodedH264Video[];

export interface IPostMeta {
  title: string;
  state: string;
  datePublished: string | null;
  dateModified: string | null;
  formattedDuration: string;
}

export interface IVideoPlayerProps {
  id: string;
  url: string;
  poster?: string;
  fluid?: boolean;
  fitVideoSize?: 'auto' | 'fixWidth' | 'fixHeight' | undefined;
  progress?: number;
  ref?: React.Ref<HTMLDivElement>;
}

export interface IHLSAsset {
  title: string;
  url: string;
  progress: number;
  size: string;
  encoding_id: number;
  status: string;
}

export type IHLSAssetArray = IHLSAsset[];

export interface IDynamicVideoThumbnail {
  thumbnailImage: string;
  thumbnailImageHover: string;
  videoUrl: string;
  progress: number;
}

export interface ICodec {
  [key: string]: string | unknown;
}
