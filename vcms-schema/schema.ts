/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/categories': {
    /** Lists all categories */
    get: operations['categories_list'];
  };
  '/comments': {
    /** Paginated listing of all comments */
    get: operations['comments_list'];
  };
  '/encode_profiles/': {
    /** Lists all encoding profiles for videos */
    get: operations['encode_profiles_list'];
  };
  '/login': {
    /** Login url endpoint. According to what the portal provides, you may provide username and/or email, plus the password */
    post: operations['login_create'];
  };
  '/manage_comments': {
    /** Manage comments for VCMS managers and reviewers */
    get: operations['manage_comments_list'];
    /** Delete comments for VCMS managers and reviewers */
    delete: operations['manage_comments_delete'];
  };
  '/manage_media': {
    /** Manage media for VCMS managers and reviewers */
    get: operations['manage_media_list'];
    /** Delete media for VCMS managers and reviewers */
    delete: operations['manage_media_delete'];
  };
  '/manage_users': {
    /** Manage users for VCMS managers and reviewers */
    get: operations['manage_users_list'];
    /** Delete users for VCMS managers */
    delete: operations['manage_users_delete'];
  };
  '/media/': {
    /** Lists all media */
    get: operations['media_list'];
    /** Adds a new media, for authenticated users */
    post: operations['media_create'];
  };
  '/media/{friendly_token}': {
    /** Get information for a media */
    get: operations['media_read'];
    /** Update a Media, for Media uploader */
    put: operations['media_update'];
    /** Actions for a media, for VCMS editors and managers */
    post: operations['media_manager_actions'];
    /** Delete a Media, for VCMS editors and managers */
    delete: operations['media_delete'];
    parameters: {
      path: {
        friendly_token: string;
      };
    };
  };
  '/media/{friendly_token}/actions': {
    /** to_be_written */
    get: operations['media_actions_list'];
    /** to_be_written */
    post: operations['media_actions_create'];
    /** to_be_written */
    delete: operations['media_actions_delete'];
    parameters: {
      path: {
        friendly_token: string;
      };
    };
  };
  '/media/{friendly_token}/comments': {
    /** to_be_written */
    get: operations['media_comments_list'];
    /** to_be_written */
    post: operations['media_comments_create'];
    /** to_be_written */
    delete: operations['media_comments_delete'];
    parameters: {
      path: {
        friendly_token: string;
      };
    };
  };
  '/media/{friendly_token}/comments/{uid}': {
    /** to_be_written */
    get: operations['media_comments_read'];
    /** to_be_written */
    post: operations['media_comments_create'];
    /** to_be_written */
    delete: operations['media_comments_delete'];
    parameters: {
      path: {
        friendly_token: string;
        uid: string;
      };
    };
  };
  '/playlists': {
    /** to_be_written */
    get: operations['playlists_list'];
    /** to_be_written */
    post: operations['playlists_create'];
  };
  '/playlists/': {
    /** to_be_written */
    get: operations['playlists_list'];
    /** to_be_written */
    post: operations['playlists_create'];
  };
  '/playlists/{friendly_token}': {
    /** to_be_written */
    get: operations['playlists_read'];
    /** to_be_written */
    put: operations['playlists_update'];
    /** to_be_written */
    post: operations['playlists_create'];
    /** to_be_written */
    delete: operations['playlists_delete'];
    parameters: {
      path: {
        friendly_token: string;
      };
    };
  };
  '/search': {
    /** to_be_written */
    get: operations['search_list'];
  };
  '/tags': {
    /** Paginated listing of all tags */
    get: operations['tags_list'];
  };
  '/user/action/{action}': {
    /** Lists user actions */
    get: operations['user_action_read'];
    parameters: {
      path: {
        action: string;
      };
    };
  };
  '/user/token': {
    /** Returns an authenticated user's token */
    get: operations['user_token_list'];
  };
  '/users': {
    /** Paginated listing of users */
    get: operations['users_list'];
  };
  '/users/': {
    /** Paginated listing of users */
    get: operations['users_list'];
  };
  '/users/{username}': {
    /** Get user details */
    get: operations['users_read'];
    /** to_be_written */
    put: operations['users_update'];
    /** Post user details - authenticated view */
    post: operations['users_create'];
    /** to_be_written */
    delete: operations['users_delete'];
    parameters: {
      path: {
        username: string;
      };
    };
  };
  '/users/{username}/contact': {
    /** Contact user through email, if user has set this option */
    post: operations['users_contact_create'];
    parameters: {
      path: {
        username: string;
      };
    };
  };
  '/whoami': {
    /** Whoami user information */
    get: operations['whoami_read'];
  };
}

export interface definitions {
  Category: {
    /** Title */
    title: string;
    /** Description */
    description?: string;
    /**
     * Is global
     * @description global categories or user specific
     */
    is_global?: boolean;
    /**
     * Media count
     * @description number of media
     */
    media_count?: number;
    /** User */
    user?: string;
    /** Thumbnail url */
    thumbnail_url?: string;
  };
  Comment: {
    /**
     * Add date
     * Format: date-time
     */
    add_date?: string;
    /**
     * Text
     * @description text
     */
    text: string;
    /** Parent */
    parent?: number;
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
     * Format: uuid
     */
    uid?: string;
  };
  EncodeProfile: {
    /** Name */
    name: string;
    /**
     * Extension
     * @enum {string}
     */
    extension: 'mp4' | 'webm' | 'gif';
    /**
     * Resolution
     * @enum {integer}
     */
    resolution?: 2160 | 1440 | 1080 | 720 | 480 | 360 | 240;
    /**
     * Codec
     * @enum {string}
     */
    codec?: 'h265' | 'h264' | 'vp9';
    /**
     * Description
     * @description description
     */
    description?: string;
  };
  Login: {
    /** Email */
    email?: string;
    /** Username */
    username?: string;
    /** Password */
    password: string;
    /** Token */
    token?: string;
  };
  Media: {
    /**
     * Friendly token
     * @description Identifier for the Media
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
     * @description media title
     */
    title?: string;
    /** Description */
    description?: string;
    /**
     * Date produced
     * Format: date-time
     */
    add_date?: string;
    /** Views */
    views?: number;
    /**
     * Media type
     * @enum {string}
     */
    media_type?: 'video' | 'image' | 'pdf' | 'audio';
    /**
     * State
     * @description state of Media
     * @enum {string}
     */
    state?: 'private' | 'public' | 'unlisted';
    /** Duration */
    duration?: number;
    /** Thumbnail url */
    thumbnail_url?: string;
    /**
     * Is reviewed
     * @description Whether media is reviewed, so it can appear on public listings
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
    /**
     * Encoding status
     * @enum {string}
     */
    encoding_status?: 'pending' | 'running' | 'fail' | 'success';
    /** Likes */
    likes?: number;
    /** Dislikes */
    dislikes?: number;
    /**
     * Reported times
     * @description how many time a media is reported
     */
    reported_times?: number;
    /**
     * Featured
     * @description Whether media is globally featured by a VCMS editor
     */
    featured?: boolean;
    /**
     * User featured
     * @description Featured by the user
     */
    user_featured?: boolean;
    /**
     * Size
     * @description media size in bytes, automatically calculated
     */
    size?: string;
  };
  SingleMedia: {
    /** Url */
    url?: string;
    /** User */
    user?: string;
    /**
     * Title
     * @description media title
     */
    title?: string;
    /** Description */
    description?: string;
    /**
     * Date produced
     * Format: date-time
     */
    add_date?: string;
    /**
     * Edit date
     * Format: date-time
     */
    edit_date?: string;
    /**
     * Media type
     * @enum {string}
     */
    media_type?: 'video' | 'image' | 'pdf' | 'audio';
    /**
     * State
     * @description state of Media
     * @enum {string}
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
     * @description Time on video that a thumbnail will be taken
     */
    thumbnail_time?: number;
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
    /**
     * Encoding status
     * @enum {string}
     */
    encoding_status?: 'pending' | 'running' | 'fail' | 'success';
    /** Views */
    views?: number;
    /** Likes */
    likes?: number;
    /** Dislikes */
    dislikes?: number;
    /**
     * Reported times
     * @description how many time a media is reported
     */
    reported_times?: number;
    /**
     * User featured
     * @description Featured by the user
     */
    user_featured?: boolean;
    /** Original media url */
    original_media_url?: string;
    /**
     * Size
     * @description media size in bytes, automatically calculated
     */
    size?: string;
    /** Video height */
    video_height?: number;
    /**
     * Enable comments
     * @description Whether comments will be allowed for this media
     */
    enable_comments?: boolean;
    /** Categories info */
    categories_info?: string;
    /**
     * Is reviewed
     * @description Whether media is reviewed, so it can appear on public listings
     */
    is_reviewed?: boolean;
    /** Edit url */
    edit_url?: string;
    /** Tags info */
    tags_info?: string;
    /** Hls info */
    hls_info?: string;
    /** License */
    license?: number;
    /** Subtitles info */
    subtitles_info?: string;
    /** Ratings info */
    ratings_info?: string;
    /** Add subtitle url */
    add_subtitle_url?: string;
    /**
     * Allow download
     * @description Whether option to download media is shown
     */
    allow_download?: boolean;
  };
  Playlist: {
    /**
     * Add date
     * Format: date-time
     */
    add_date?: string;
    /** Title */
    title: string;
    /**
     * Description
     * @description description
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
  };
  Tag: {
    /** Title */
    title: string;
    /**
     * Media count
     * @description number of media
     */
    media_count?: number;
    /** Thumbnail url */
    thumbnail_url?: string;
  };
  UserDetail: {
    /** About me */
    description?: string;
    /**
     * Date added
     * Format: date-time
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
     * @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
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
  };
}

export interface operations {
  /** Lists all categories */
  categories_list: {
    responses: {
      /** response description */
      200: {
        schema: definitions['Category'];
      };
    };
  };
  /** Paginated listing of all comments */
  comments_list: {
    parameters: {
      query: {
        /** Page number */
        page?: number;
        /** username */
        author?: string;
      };
    };
    responses: {
      /** response description */
      200: {
        schema: definitions['Comment'][];
      };
    };
  };
  /** Lists all encoding profiles for videos */
  encode_profiles_list: {
    responses: {
      200: {
        schema: definitions['EncodeProfile'][];
      };
    };
  };
  /** Login url endpoint. According to what the portal provides, you may provide username and/or email, plus the password */
  login_create: {
    parameters: {
      formData: {
        /** username */
        username?: string;
        /** email */
        email?: string;
        /** password */
        password: string;
      };
    };
    responses: {
      /** user details */
      200: {
        schema: definitions['Login'];
      };
      /** Bad request */
      404: unknown;
    };
  };
  /** Manage comments for VCMS managers and reviewers */
  manage_comments_list: {
    responses: {
      200: unknown;
    };
  };
  /** Delete comments for VCMS managers and reviewers */
  manage_comments_delete: {
    responses: {
      204: never;
    };
  };
  /** Manage media for VCMS managers and reviewers */
  manage_media_list: {
    parameters: {
      query: {
        /** Sort by any of: title, add_date, edit_date, views, likes, reported_times */
        sort_by?: string;
        /** Order by: asc, desc */
        ordering?: string;
        /** Media state, options: private", "public", "unlisted */
        state?: string;
        /** Encoding status, options "pending", "running", "fail", "success" */
        encoding_status?: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** Delete media for VCMS managers and reviewers */
  manage_media_delete: {
    responses: {
      204: never;
    };
  };
  /** Manage users for VCMS managers and reviewers */
  manage_users_list: {
    responses: {
      200: unknown;
    };
  };
  /** Delete users for VCMS managers */
  manage_users_delete: {
    responses: {
      204: never;
    };
  };
  /** Lists all media */
  media_list: {
    parameters: {
      query: {
        /** Page number */
        page?: number;
        /** username */
        author?: string;
        /** show */
        show?: 'recommended' | 'featured' | 'latest';
      };
    };
    responses: {
      200: {
        schema: definitions['Media'][];
      };
    };
  };
  /** Adds a new media, for authenticated users */
  media_create: {
    parameters: {
      formData: {
        /** media_file */
        media_file: unknown;
        /** description */
        description?: string;
        /** title */
        title?: string;
      };
    };
    responses: {
      /** response description */
      201: {
        schema: definitions['Media'];
      };
      /** bad request */
      401: unknown;
    };
  };
  /** Get information for a media */
  media_read: {
    parameters: {
      path: {
        /** unique identifier */
        friendly_token: string;
      };
    };
    responses: {
      200: {
        schema: definitions['SingleMedia'];
      };
      /** bad request */
      400: unknown;
    };
  };
  /** Update a Media, for Media uploader */
  media_update: {
    parameters: {
      path: {
        friendly_token: string;
      };
      formData: {
        /** description */
        description?: string;
        /** title */
        title?: string;
        /** media_file */
        media_file?: unknown;
      };
    };
    responses: {
      /** response description */
      201: {
        schema: definitions['Media'];
      };
      /** bad request */
      401: unknown;
    };
  };
  /** Actions for a media, for VCMS editors and managers */
  media_manager_actions: {
    parameters: {
      path: {
        /** unique identifier */
        friendly_token: string;
      };
      formData: {
        /** action to perform */
        type?: 'encode' | 'review';
        /** if action to perform is encode, need to specify list of ids of encoding profiles */
        encoding_profiles?: string[];
        /** if action is review, this is the result (True for reviewed, False for not reviewed) */
        result?: boolean;
      };
    };
    responses: {
      /** action created */
      201: unknown;
      /** bad request */
      400: unknown;
    };
  };
  /** Delete a Media, for VCMS editors and managers */
  media_delete: {
    parameters: {
      path: {
        /** unique identifier */
        friendly_token: string;
      };
    };
    responses: {
      /** no content */
      204: never;
    };
  };
  /** to_be_written */
  media_actions_list: {
    parameters: {
      path: {
        friendly_token: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** to_be_written */
  media_actions_create: {
    parameters: {
      path: {
        friendly_token: string;
      };
    };
    responses: {
      201: unknown;
    };
  };
  /** to_be_written */
  media_actions_delete: {
    parameters: {
      path: {
        friendly_token: string;
      };
    };
    responses: {
      204: never;
    };
  };
  /** to_be_written */
  media_comments_list: {
    parameters: {
      path: {
        friendly_token: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** to_be_written */
  media_comments_create: {
    parameters: {
      path: {
        friendly_token: string;
        uid: string;
      };
    };
    responses: {
      201: unknown;
    };
  };
  /** to_be_written */
  media_comments_delete: {
    parameters: {
      path: {
        friendly_token: string;
        uid: string;
      };
    };
    responses: {
      204: never;
    };
  };
  /** to_be_written */
  media_comments_read: {
    parameters: {
      path: {
        friendly_token: string;
        uid: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** to_be_written */
  playlists_list: {
    responses: {
      /** response description */
      200: {
        schema: definitions['Playlist'][];
      };
    };
  };
  /** to_be_written */
  playlists_create: {
    parameters: {
      path: {
        friendly_token: string;
      };
    };
    responses: {
      201: unknown;
    };
  };
  /** to_be_written */
  playlists_read: {
    parameters: {
      path: {
        friendly_token: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** to_be_written */
  playlists_update: {
    parameters: {
      path: {
        friendly_token: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** to_be_written */
  playlists_delete: {
    parameters: {
      path: {
        friendly_token: string;
      };
    };
    responses: {
      204: never;
    };
  };
  /** to_be_written */
  search_list: {
    responses: {
      200: unknown;
    };
  };
  /** Paginated listing of all tags */
  tags_list: {
    parameters: {
      query: {
        /** Page number */
        page?: number;
      };
    };
    responses: {
      /** response description */
      200: {
        schema: definitions['Tag'];
      };
    };
  };
  /** Lists user actions */
  user_action_read: {
    parameters: {
      path: {
        /** action */
        action: 'like' | 'dislike' | 'watch' | 'report' | 'rate';
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** Returns an authenticated user's token */
  user_token_list: {
    responses: {
      /** token */
      200: unknown;
      /** Forbidden */
      403: unknown;
    };
  };
  /** Paginated listing of users */
  users_list: {
    parameters: {
      query: {
        /** Page number */
        page?: number;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** Get user details */
  users_read: {
    parameters: {
      path: {
        /** username */
        username: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** to_be_written */
  users_update: {
    parameters: {
      path: {
        username: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  /** Post user details - authenticated view */
  users_create: {
    parameters: {
      path: {
        /** username */
        username: string;
      };
      formData: {
        /** logo */
        logo: unknown;
        /** description */
        description?: string;
        /** name */
        name?: string;
      };
    };
    responses: {
      /** response description */
      201: {
        schema: definitions['UserDetail'];
      };
      /** bad request */
      400: unknown;
    };
  };
  /** to_be_written */
  users_delete: {
    parameters: {
      path: {
        username: string;
      };
    };
    responses: {
      204: never;
    };
  };
  /** Contact user through email, if user has set this option */
  users_contact_create: {
    parameters: {
      path: {
        username: string;
      };
    };
    responses: {
      201: unknown;
    };
  };
  /** Whoami user information */
  whoami_read: {
    responses: {
      /** response description */
      200: {
        schema: definitions['UserDetail'];
      };
      /** Forbidden */
      403: unknown;
    };
  };
}

// export interface external {}