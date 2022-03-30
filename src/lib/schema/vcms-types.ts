/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Category {
  /** Title */
  title: string;

  /** Description */
  description?: string;

  /**
   * Is global
   * global categories or user specific
   */
  is_global?: boolean;

  /**
   * Media count
   * number of media
   * @min -2147483648
   * @max 2147483647
   */
  media_count?: number;

  /** User */
  user?: string;

  /** Thumbnail url */
  thumbnail_url?: string;
}

export interface Comment {
  /**
   * Add date
   * @format date-time
   */
  add_date?: string;

  /**
   * Text
   * text
   */
  text: string;

  /** Parent */
  parent?: number | null;

  /** Author thumbnail url */
  author_thumbnail_url?: string;

  /** Author profile */
  author_profile?: string;

  /** Author name */
  author_name?: string;

  /** Media url */
  media_url?: string;

  /**
   * Uid
   * @format uuid
   */
  uid?: string;
}

export interface EncodeProfile {
  /** Name */
  name: string;

  /** Extension */
  extension: 'mp4' | 'webm' | 'gif';

  /** Resolution */
  resolution?: '2160' | '1440' | '1080' | '720' | '480' | '360' | '240' | null;

  /** Codec */
  codec?: 'h265' | 'h264' | 'vp9' | null;

  /**
   * Description
   * description
   */
  description?: string;
}

export interface Login {
  /** Email */
  email?: string;

  /** Username */
  username?: string;

  /** Password */
  password: string;

  /** Token */
  token?: string;
}

export interface IMedia {
  /**
   * Friendly token
   * Identifier for the Media
   */
  friendly_token?: string;

  /** Url */
  url?: string;

  /** Api url */
  api_url?: string;

  /** User */
  user?: string;

  /**
   * Title
   * media title
   */
  title?: string;

  /** Description */
  description?: string;

  /**
   * Date produced
   * @format date-time
   */
  add_date?: string;

  /** Views */
  views?: number;

  /** Media type */
  media_type?: 'video' | 'image' | 'pdf' | 'audio';

  /**
   * State
   * state of Media
   */
  state?: 'private' | 'public' | 'unlisted';

  /** Duration */
  duration?: number;

  /** Thumbnail url */
  thumbnail_url?: string;

  /**
   * Is reviewed
   * Whether media is reviewed, so it can appear on public listings
   */
  is_reviewed?: boolean;

  /** Preview url */
  preview_url?: string;

  /** Author name */
  author_name?: string;

  /** Author profile */
  author_profile?: string;

  /** Author thumbnail */
  author_thumbnail?: string;

  /** Encoding status */
  encoding_status?: 'pending' | 'running' | 'fail' | 'success';

  /** Likes */
  likes?: number;

  /** Dislikes */
  dislikes?: number;

  /**
   * Reported times
   * how many time a media is reported
   */
  reported_times?: number;

  /**
   * Featured
   * Whether media is globally featured by a VCMS editor
   */
  featured?: boolean;

  /**
   * User featured
   * Featured by the user
   */
  user_featured?: boolean;

  /**
   * Size
   * media size in bytes, automatically calculated
   */
  size?: string;
}

export interface SingleMedia {
  /** Url */
  url?: string;

  /** User */
  user?: string;

  /**
   * Title
   * media title
   */
  title?: string;

  /** Description */
  description?: string;

  /**
   * Date produced
   * @format date-time
   */
  add_date?: string;

  /**
   * Edit date
   * @format date-time
   */
  edit_date?: string;

  /** Media type */
  media_type?: 'video' | 'image' | 'pdf' | 'audio';

  /**
   * State
   * state of Media
   */
  state?: 'private' | 'public' | 'unlisted';

  /** Duration */
  duration?: number;

  /** Thumbnail url */
  thumbnail_url?: string;

  /** Poster url */
  poster_url?: string;

  /**
   * Thumbnail time
   * Time on video that a thumbnail will be taken
   */
  thumbnail_time?: number | null;

  /** Sprites url */
  sprites_url?: string;

  /** Preview url */
  preview_url?: string;

  /** Author name */
  author_name?: string;

  /** Author profile */
  author_profile?: string;

  /** Author thumbnail */
  author_thumbnail?: string;

  /** Encodings info */
  encodings_info?: string;

  /** Encoding status */
  encoding_status?: 'pending' | 'running' | 'fail' | 'success';

  /** Views */
  views?: number;

  /** Likes */
  likes?: number;

  /** Dislikes */
  dislikes?: number;

  /**
   * Reported times
   * how many time a media is reported
   */
  reported_times?: number;

  /**
   * User featured
   * Featured by the user
   */
  user_featured?: boolean;

  /** Original media url */
  original_media_url?: string;

  /**
   * Size
   * media size in bytes, automatically calculated
   */
  size?: string;

  /** Video height */
  video_height?: number;

  /**
   * Enable comments
   * Whether comments will be allowed for this media
   */
  enable_comments?: boolean;

  /** Categories info */
  categories_info?: string;

  /**
   * Is reviewed
   * Whether media is reviewed, so it can appear on public listings
   */
  is_reviewed?: boolean;

  /** Edit url */
  edit_url?: string;

  /** Tags info */
  tags_info?: string;

  /** Hls info */
  hls_info?: string;

  /** License */
  license?: number | null;

  /** Subtitles info */
  subtitles_info?: string;

  /** Ratings info */
  ratings_info?: string;

  /** Add subtitle url */
  add_subtitle_url?: string;

  /**
   * Allow download
   * Whether option to download media is shown
   */
  allow_download?: boolean;
}

export interface Playlist {
  /**
   * Add date
   * @format date-time
   */
  add_date?: string;

  /** Title */
  title: string;

  /**
   * Description
   * description
   */
  description?: string;

  /** User */
  user?: string;

  /** Media count */
  media_count?: string;

  /** Url */
  url?: string;

  /** Api url */
  api_url?: string;

  /** Thumbnail url */
  thumbnail_url?: string;
}

export interface Tag {
  /** Title */
  title: string;

  /**
   * Media count
   * number of media
   * @min -2147483648
   * @max 2147483647
   */
  media_count?: number;

  /** Thumbnail url */
  thumbnail_url?: string;
}

export interface UserDetail {
  /** About me */
  description?: string;

  /**
   * Date added
   * @format date-time
   */
  date_added?: string;

  /** Full name */
  name?: string;

  /** Is featured */
  is_featured?: boolean;

  /** Thumbnail url */
  thumbnail_url?: string;

  /** Banner thumbnail url */
  banner_thumbnail_url?: string;

  /** Url */
  url?: string;

  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   */
  username?: string;

  /** Media info */
  media_info?: string;

  /** Api url */
  api_url?: string;

  /** Edit url */
  edit_url?: string;

  /** Default channel edit url */
  default_channel_edit_url?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost/api/v1';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Nonovium VCMS API
 * @version v1
 * @baseUrl http://localhost/api/v1
 * @contact (https://nonovium.com)
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  categories = {
    /**
     * @description Lists all categories
     *
     * @tags Categories
     * @name CategoriesList
     * @summary Lists Categories
     * @request GET:/categories
     * @secure
     */
    categoriesList: (params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categories`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  comments = {
    /**
     * @description Paginated listing of all comments
     *
     * @tags Comments
     * @name CommentsList
     * @summary Lists Comments
     * @request GET:/comments
     * @secure
     */
    commentsList: (
      query?: { page?: number; author?: string },
      params: RequestParams = {}
    ) =>
      this.request<Comment[], any>({
        path: `/comments`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  encodeProfiles = {
    /**
     * @description Lists all encoding profiles for videos
     *
     * @tags Encoding Profiles
     * @name EncodeProfilesList
     * @summary List Encoding Profiles
     * @request GET:/encode_profiles/
     * @secure
     */
    encodeProfilesList: (params: RequestParams = {}) =>
      this.request<EncodeProfile[], any>({
        path: `/encode_profiles/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  login = {
    /**
     * @description Login url endpoint. According to what the portal provides, you may provide username and/or email, plus the password
     *
     * @tags Users
     * @name LoginCreate
     * @summary Login url
     * @request POST:/login
     * @secure
     */
    loginCreate: (
      data: { username?: string; email?: string; password: string },
      params: RequestParams = {}
    ) =>
      this.request<Login, void>({
        path: `/login`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),
  };
  manageComments = {
    /**
     * @description Manage comments for VCMS managers and reviewers
     *
     * @tags Manage
     * @name ManageCommentsList
     * @summary Manage Comments
     * @request GET:/manage_comments
     * @secure
     */
    manageCommentsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manage_comments`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Delete comments for VCMS managers and reviewers
     *
     * @tags Manage
     * @name ManageCommentsDelete
     * @summary Delete Comments
     * @request DELETE:/manage_comments
     * @secure
     */
    manageCommentsDelete: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manage_comments`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  manageMedia = {
    /**
     * @description Manage media for VCMS managers and reviewers
     *
     * @tags Manage
     * @name ManageMediaList
     * @summary Manage Media
     * @request GET:/manage_media
     * @secure
     */
    manageMediaList: (
      query?: {
        sort_by?: string;
        ordering?: string;
        state?: string;
        encoding_status?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/manage_media`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Delete media for VCMS managers and reviewers
     *
     * @tags Manage
     * @name ManageMediaDelete
     * @summary Delete Media
     * @request DELETE:/manage_media
     * @secure
     */
    manageMediaDelete: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manage_media`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  manageUsers = {
    /**
     * @description Manage users for VCMS managers and reviewers
     *
     * @tags Manage
     * @name ManageUsersList
     * @summary Manage Users
     * @request GET:/manage_users
     * @secure
     */
    manageUsersList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manage_users`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Delete users for VCMS managers
     *
     * @tags Manage
     * @name ManageUsersDelete
     * @summary Delete Users
     * @request DELETE:/manage_users
     * @secure
     */
    manageUsersDelete: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manage_users`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  media = {
    /**
     * @description Lists all media
     *
     * @tags Media
     * @name MediaList
     * @summary List Media
     * @request GET:/media/
     * @secure
     */
    mediaList: (
      query?: {
        page?: number;
        author?: string;
        show?: 'recommended' | 'featured' | 'latest';
      },
      params: RequestParams = {}
    ) =>
      this.request<Media[], any>({
        path: `/media/`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * @description Adds a new media, for authenticated users
     *
     * @tags Media
     * @name MediaCreate
     * @summary Add new Media
     * @request POST:/media/
     * @secure
     */
    mediaCreate: (
      data: { media_file: File; description?: string; title?: string },
      params: RequestParams = {}
    ) =>
      this.request<Media, void>({
        path: `/media/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get information for a media
     *
     * @tags Media
     * @name MediaRead
     * @summary Get information for Media
     * @request GET:/media/{friendly_token}
     * @secure
     */
    mediaRead: (
      friendlyToken: string,
      friendlyToken: string,
      params: RequestParams = {}
    ) =>
      this.request<SingleMedia, void>({
        path: `/media/${friendlyToken}`,
        method: 'GET',
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * @description Actions for a media, for VCMS editors and managers
     *
     * @tags Media
     * @name MediaManagerActions
     * @summary Run action on Media
     * @request POST:/media/{friendly_token}
     * @secure
     */
    mediaManagerActions: (
      friendlyToken: string,
      friendlyToken: string,
      data: {
        type?: 'encode' | 'review';
        encoding_profiles?: string[];
        result?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/media/${friendlyToken}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Update a Media, for Media uploader
     *
     * @tags Media
     * @name MediaUpdate
     * @summary Update Media
     * @request PUT:/media/{friendly_token}
     * @secure
     */
    mediaUpdate: (
      friendlyToken: string,
      data: { description?: string; title?: string; media_file?: File },
      params: RequestParams = {}
    ) =>
      this.request<Media, void>({
        path: `/media/${friendlyToken}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a Media, for VCMS editors and managers
     *
     * @tags Media
     * @name MediaDelete
     * @summary Delete Media
     * @request DELETE:/media/{friendly_token}
     * @secure
     */
    mediaDelete: (
      friendlyToken: string,
      friendlyToken: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaActionsList
     * @summary to_be_written
     * @request GET:/media/{friendly_token}/actions
     * @secure
     */
    mediaActionsList: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/actions`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaActionsCreate
     * @summary to_be_written
     * @request POST:/media/{friendly_token}/actions
     * @secure
     */
    mediaActionsCreate: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/actions`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaActionsDelete
     * @summary to_be_written
     * @request DELETE:/media/{friendly_token}/actions
     * @secure
     */
    mediaActionsDelete: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/actions`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaCommentsList
     * @summary to_be_written
     * @request GET:/media/{friendly_token}/comments
     * @secure
     */
    mediaCommentsList: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/comments`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaCommentsCreate
     * @summary to_be_written
     * @request POST:/media/{friendly_token}/comments
     * @secure
     */
    mediaCommentsCreate: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/comments`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaCommentsDelete
     * @summary to_be_written
     * @request DELETE:/media/{friendly_token}/comments
     * @secure
     */
    mediaCommentsDelete: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/comments`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaCommentsRead
     * @summary to_be_written
     * @request GET:/media/{friendly_token}/comments/{uid}
     * @secure
     */
    mediaCommentsRead: (
      friendlyToken: string,
      uid: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/comments/${uid}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaCommentsCreate2
     * @summary to_be_written
     * @request POST:/media/{friendly_token}/comments/{uid}
     * @originalName mediaCommentsCreate
     * @duplicate
     * @secure
     */
    mediaCommentsCreate2: (
      friendlyToken: string,
      uid: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/comments/${uid}`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Media
     * @name MediaCommentsDelete2
     * @summary to_be_written
     * @request DELETE:/media/{friendly_token}/comments/{uid}
     * @originalName mediaCommentsDelete
     * @duplicate
     * @secure
     */
    mediaCommentsDelete2: (
      friendlyToken: string,
      uid: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/media/${friendlyToken}/comments/${uid}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  playlists = {
    /**
     * @description to_be_written
     *
     * @tags Playlists
     * @name PlaylistsList
     * @summary to_be_written
     * @request GET:/playlists
     * @secure
     */
    playlistsList: (params: RequestParams = {}) =>
      this.request<Playlist[], any>({
        path: `/playlists`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Playlists
     * @name PlaylistsCreate
     * @summary to_be_written
     * @request POST:/playlists
     * @secure
     */
    playlistsCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/playlists`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Playlists
     * @name PlaylistsList2
     * @summary to_be_written
     * @request GET:/playlists/
     * @originalName playlistsList
     * @duplicate
     * @secure
     */
    playlistsList2: (params: RequestParams = {}) =>
      this.request<Playlist[], any>({
        path: `/playlists/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Playlists
     * @name PlaylistsCreate2
     * @summary to_be_written
     * @request POST:/playlists/
     * @originalName playlistsCreate
     * @duplicate
     * @secure
     */
    playlistsCreate2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/playlists/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Playlists
     * @name PlaylistsRead
     * @summary to_be_written
     * @request GET:/playlists/{friendly_token}
     * @secure
     */
    playlistsRead: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/playlists/${friendlyToken}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Playlists
     * @name PlaylistsCreate3
     * @summary to_be_written
     * @request POST:/playlists/{friendly_token}
     * @originalName playlistsCreate
     * @duplicate
     * @secure
     */
    playlistsCreate3: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/playlists/${friendlyToken}`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Playlists
     * @name PlaylistsUpdate
     * @summary to_be_written
     * @request PUT:/playlists/{friendly_token}
     * @secure
     */
    playlistsUpdate: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/playlists/${friendlyToken}`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Playlists
     * @name PlaylistsDelete
     * @summary to_be_written
     * @request DELETE:/playlists/{friendly_token}
     * @secure
     */
    playlistsDelete: (friendlyToken: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/playlists/${friendlyToken}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  search = {
    /**
     * @description to_be_written
     *
     * @tags Search
     * @name SearchList
     * @summary to_be_written
     * @request GET:/search
     * @secure
     */
    searchList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/search`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  tags = {
    /**
     * @description Paginated listing of all tags
     *
     * @tags Tags
     * @name TagsList
     * @summary Lists Tags
     * @request GET:/tags
     * @secure
     */
    tagsList: (query?: { page?: number }, params: RequestParams = {}) =>
      this.request<Tag, any>({
        path: `/tags`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  user = {
    /**
     * @description Lists user actions
     *
     * @tags Users
     * @name UserActionRead
     * @summary List user actions
     * @request GET:/user/action/{action}
     * @secure
     */
    userActionRead: (
      action: string,
      action: 'like' | 'dislike' | 'watch' | 'report' | 'rate',
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/user/action/${action}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Returns an authenticated user's token
     *
     * @tags Users
     * @name UserTokenList
     * @summary Get a user token
     * @request GET:/user/token
     * @secure
     */
    userTokenList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/token`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  users = {
    /**
     * @description Paginated listing of users
     *
     * @tags Users
     * @name UsersList
     * @summary List users
     * @request GET:/users
     * @secure
     */
    usersList: (query?: { page?: number }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Paginated listing of users
     *
     * @tags Users
     * @name UsersList2
     * @summary List users
     * @request GET:/users/
     * @originalName usersList
     * @duplicate
     * @secure
     */
    usersList2: (query?: { page?: number }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Get user details
     *
     * @tags Users
     * @name UsersRead
     * @summary List user details
     * @request GET:/users/{username}
     * @secure
     */
    usersRead: (
      username: string,
      username: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/${username}`,
        method: 'GET',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Post user details - authenticated view
     *
     * @tags Users
     * @name UsersCreate
     * @summary Edit user details
     * @request POST:/users/{username}
     * @secure
     */
    usersCreate: (
      username: string,
      username: string,
      data: { logo: File; description?: string; name?: string },
      params: RequestParams = {}
    ) =>
      this.request<UserDetail, void>({
        path: `/users/${username}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Users
     * @name UsersUpdate
     * @summary Xto_be_written
     * @request PUT:/users/{username}
     * @secure
     */
    usersUpdate: (username: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${username}`,
        method: 'PUT',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description to_be_written
     *
     * @tags Users
     * @name UsersDelete
     * @summary to_be_written
     * @request DELETE:/users/{username}
     * @secure
     */
    usersDelete: (username: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${username}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Contact user through email, if user has set this option
     *
     * @tags Users
     * @name UsersContactCreate
     * @summary Contact user
     * @request POST:/users/{username}/contact
     * @secure
     */
    usersContactCreate: (username: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${username}/contact`,
        method: 'POST',
        secure: true,
        ...params,
      }),
  };
  whoami = {
    /**
     * @description Whoami user information
     *
     * @tags Users
     * @name WhoamiRead
     * @summary Whoami user information
     * @request GET:/whoami
     * @secure
     */
    whoamiRead: (params: RequestParams = {}) =>
      this.request<UserDetail, void>({
        path: `/whoami`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
