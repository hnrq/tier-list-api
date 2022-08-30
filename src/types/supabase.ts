/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/product": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.product.id"];
          title?: parameters["rowFilter.product.title"];
          category_id?: parameters["rowFilter.product.category_id"];
          store?: parameters["rowFilter.product.store"];
          images?: parameters["rowFilter.product.images"];
          ratings?: parameters["rowFilter.product.ratings"];
          currency?: parameters["rowFilter.product.currency"];
          original_price?: parameters["rowFilter.product.original_price"];
          sale_price?: parameters["rowFilter.product.sale_price"];
          created_at?: parameters["rowFilter.product.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["product"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** product */
          product?: definitions["product"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.product.id"];
          title?: parameters["rowFilter.product.title"];
          category_id?: parameters["rowFilter.product.category_id"];
          store?: parameters["rowFilter.product.store"];
          images?: parameters["rowFilter.product.images"];
          ratings?: parameters["rowFilter.product.ratings"];
          currency?: parameters["rowFilter.product.currency"];
          original_price?: parameters["rowFilter.product.original_price"];
          sale_price?: parameters["rowFilter.product.sale_price"];
          created_at?: parameters["rowFilter.product.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.product.id"];
          title?: parameters["rowFilter.product.title"];
          category_id?: parameters["rowFilter.product.category_id"];
          store?: parameters["rowFilter.product.store"];
          images?: parameters["rowFilter.product.images"];
          ratings?: parameters["rowFilter.product.ratings"];
          currency?: parameters["rowFilter.product.currency"];
          original_price?: parameters["rowFilter.product.original_price"];
          sale_price?: parameters["rowFilter.product.sale_price"];
          created_at?: parameters["rowFilter.product.created_at"];
        };
        body: {
          /** product */
          product?: definitions["product"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rank": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.rank.id"];
          title?: parameters["rowFilter.rank.title"];
          created_at?: parameters["rowFilter.rank.created_at"];
          description?: parameters["rowFilter.rank.description"];
          product_order?: parameters["rowFilter.rank.product_order"];
          id_tier_list?: parameters["rowFilter.rank.id_tier_list"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["rank"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** rank */
          rank?: definitions["rank"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.rank.id"];
          title?: parameters["rowFilter.rank.title"];
          created_at?: parameters["rowFilter.rank.created_at"];
          description?: parameters["rowFilter.rank.description"];
          product_order?: parameters["rowFilter.rank.product_order"];
          id_tier_list?: parameters["rowFilter.rank.id_tier_list"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.rank.id"];
          title?: parameters["rowFilter.rank.title"];
          created_at?: parameters["rowFilter.rank.created_at"];
          description?: parameters["rowFilter.rank.description"];
          product_order?: parameters["rowFilter.rank.product_order"];
          id_tier_list?: parameters["rowFilter.rank.id_tier_list"];
        };
        body: {
          /** rank */
          rank?: definitions["rank"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/tier_list_product": {
    get: {
      parameters: {
        query: {
          product_id?: parameters["rowFilter.tier_list_product.product_id"];
          rank_id?: parameters["rowFilter.tier_list_product.rank_id"];
          tier_list_id?: parameters["rowFilter.tier_list_product.tier_list_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["tier_list_product"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** tier_list_product */
          tier_list_product?: definitions["tier_list_product"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          product_id?: parameters["rowFilter.tier_list_product.product_id"];
          rank_id?: parameters["rowFilter.tier_list_product.rank_id"];
          tier_list_id?: parameters["rowFilter.tier_list_product.tier_list_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          product_id?: parameters["rowFilter.tier_list_product.product_id"];
          rank_id?: parameters["rowFilter.tier_list_product.rank_id"];
          tier_list_id?: parameters["rowFilter.tier_list_product.tier_list_id"];
        };
        body: {
          /** tier_list_product */
          tier_list_product?: definitions["tier_list_product"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/tier_list": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tier_list.id"];
          title?: parameters["rowFilter.tier_list.title"];
          tier_order?: parameters["rowFilter.tier_list.tier_order"];
          created_at?: parameters["rowFilter.tier_list.created_at"];
          description?: parameters["rowFilter.tier_list.description"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["tier_list"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** tier_list */
          tier_list?: definitions["tier_list"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tier_list.id"];
          title?: parameters["rowFilter.tier_list.title"];
          tier_order?: parameters["rowFilter.tier_list.tier_order"];
          created_at?: parameters["rowFilter.tier_list.created_at"];
          description?: parameters["rowFilter.tier_list.description"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.tier_list.id"];
          title?: parameters["rowFilter.tier_list.title"];
          tier_order?: parameters["rowFilter.tier_list.tier_order"];
          created_at?: parameters["rowFilter.tier_list.created_at"];
          description?: parameters["rowFilter.tier_list.description"];
        };
        body: {
          /** tier_list */
          tier_list?: definitions["tier_list"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  product: {
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: character varying */
    title: string;
    /** Format: integer */
    category_id: number;
    /** Format: character varying */
    store: string;
    /** Format: ARRAY */
    images: unknown[];
    /** Format: jsonb */
    ratings: unknown;
    /** Format: character varying */
    currency: string;
    /** Format: jsonb */
    original_price: unknown;
    /** Format: jsonb */
    sale_price?: unknown;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
  };
  rank: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: character varying */
    title: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /** Format: character varying */
    description?: string;
    /** Format: ARRAY */
    product_order: unknown[];
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `tier_list.id`.<fk table='tier_list' column='id'/>
     */
    id_tier_list?: string;
  };
  tier_list_product: {
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `product.id`.<fk table='product' column='id'/>
     */
    product_id: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `rank.id`.<fk table='rank' column='id'/>
     */
    rank_id?: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `tier_list.id`.<fk table='tier_list' column='id'/>
     */
    tier_list_id: string;
  };
  tier_list: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: character varying */
    title: string;
    /** Format: ARRAY */
    tier_order: unknown[];
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: character varying */
    description?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description product */
  "body.product": definitions["product"];
  /** Format: character varying */
  "rowFilter.product.id": string;
  /** Format: character varying */
  "rowFilter.product.title": string;
  /** Format: integer */
  "rowFilter.product.category_id": string;
  /** Format: character varying */
  "rowFilter.product.store": string;
  /** Format: ARRAY */
  "rowFilter.product.images": string;
  /** Format: jsonb */
  "rowFilter.product.ratings": string;
  /** Format: character varying */
  "rowFilter.product.currency": string;
  /** Format: jsonb */
  "rowFilter.product.original_price": string;
  /** Format: jsonb */
  "rowFilter.product.sale_price": string;
  /** Format: timestamp with time zone */
  "rowFilter.product.created_at": string;
  /** @description rank */
  "body.rank": definitions["rank"];
  /** Format: bigint */
  "rowFilter.rank.id": string;
  /** Format: character varying */
  "rowFilter.rank.title": string;
  /** Format: timestamp with time zone */
  "rowFilter.rank.created_at": string;
  /** Format: character varying */
  "rowFilter.rank.description": string;
  /** Format: ARRAY */
  "rowFilter.rank.product_order": string;
  /** Format: uuid */
  "rowFilter.rank.id_tier_list": string;
  /** @description tier_list_product */
  "body.tier_list_product": definitions["tier_list_product"];
  /** Format: character varying */
  "rowFilter.tier_list_product.product_id": string;
  /** Format: bigint */
  "rowFilter.tier_list_product.rank_id": string;
  /** Format: uuid */
  "rowFilter.tier_list_product.tier_list_id": string;
  /** @description tier_list */
  "body.tier_list": definitions["tier_list"];
  /** Format: uuid */
  "rowFilter.tier_list.id": string;
  /** Format: character varying */
  "rowFilter.tier_list.title": string;
  /** Format: ARRAY */
  "rowFilter.tier_list.tier_order": string;
  /** Format: timestamp with time zone */
  "rowFilter.tier_list.created_at": string;
  /** Format: character varying */
  "rowFilter.tier_list.description": string;
}

export interface operations {}

export interface external {}
