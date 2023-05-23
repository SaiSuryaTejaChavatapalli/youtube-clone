export const YOUTUBE_API_KEY = "AIzaSyDeSTfXCn-eT_DE0HLGJVtHM6fxam9DBiI";
export const YOUTUBE_VIDEOS_API = `https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;
export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const indMock = [
  {
    kind: "youtube#searchResult",
    etag: "abcde12345",
    id: {
      kind: "youtube#video",
      videoId: "ABC123",
    },
    snippet: {
      publishedAt: "2023-04-29T10:30:00Z",
      channelId: "XYZ789",
      title: "Mock Video Title 1",
      description: "This is a mock video description.",
      thumbnails: {
        default: {
          url: "https://example.com/thumbnail1.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://example.com/thumbnail2.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://example.com/thumbnail3.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Mock Channel Title 1",
      liveBroadcastContent: "none",
      publishTime: "2023-04-29T10:30:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "abcde12345",
    id: {
      kind: "youtube#video",
      videoId: "ABC124",
    },
    snippet: {
      publishedAt: "2023-04-29T10:30:00Z",
      channelId: "XYZ789",
      title: "Mock Video Title 1",
      description: "This is a mock video description.",
      thumbnails: {
        default: {
          url: "https://example.com/thumbnail1.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://example.com/thumbnail2.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://example.com/thumbnail3.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Mock Channel Title 1",
      liveBroadcastContent: "none",
      publishTime: "2023-04-29T10:30:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "abcde12345",
    id: {
      kind: "youtube#video",
      videoId: "ABC125",
    },
    snippet: {
      publishedAt: "2023-04-29T10:30:00Z",
      channelId: "XYZ789",
      title: "Mock Video Title 1",
      description: "This is a mock video description.",
      thumbnails: {
        default: {
          url: "https://example.com/thumbnail1.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://example.com/thumbnail2.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://example.com/thumbnail3.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Mock Channel Title 1",
      liveBroadcastContent: "none",
      publishTime: "2023-04-29T10:30:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "abcde12345",
    id: {
      kind: "youtube#video",
      videoId: "ABC126",
    },
    snippet: {
      publishedAt: "2023-04-29T10:30:00Z",
      channelId: "XYZ789",
      title: "Mock Video Title 1",
      description: "This is a mock video description.",
      thumbnails: {
        default: {
          url: "https://example.com/thumbnail1.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://example.com/thumbnail2.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://example.com/thumbnail3.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Mock Channel Title 1",
      liveBroadcastContent: "none",
      publishTime: "2023-04-29T10:30:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "abcde12345",
    id: {
      kind: "youtube#video",
      videoId: "ABC127",
    },
    snippet: {
      publishedAt: "2023-04-29T10:30:00Z",
      channelId: "XYZ789",
      title: "Mock Video Title 1",
      description: "This is a mock video description.",
      thumbnails: {
        default: {
          url: "https://example.com/thumbnail1.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://example.com/thumbnail2.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://example.com/thumbnail3.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Mock Channel Title 1",
      liveBroadcastContent: "none",
      publishTime: "2023-04-29T10:30:00Z",
    },
  },
];
