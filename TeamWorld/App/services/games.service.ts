import { Injectable } from '@angular/core';

import { TransportService } from '../services/transort.service'
import { GetAllGamesResponse } from '../models/dto/responses/get-all-games-response';


@Injectable()
export class GamesService {

    constructor(private transportServise: TransportService) {
    }

    public getAllGames(): Promise<GetAllGamesResponse> {
        const self = this;
        return self.transportServise.postData('api/Game/GetAllGames')
    }
}